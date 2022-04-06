/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import {
  Actions,
  composeWithUi,
  ControlElement,
  isEnumControl,
  OwnPropsOfControl,
  RankedTester,
  rankWith
} from '@jsonforms/core';
import { ListItem } from 'carbon-components-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';

/**
 * To use this component you will need to add your own tester:
 * <pre><code>
 * ...
 * export const AutocompleteControlRendererTester: RankedTester = rankWith(2, isEnumControl);
 * ...
 * </code></pre>
 * Add the tester and renderer to JSONForms registry:
 * <pre><code>
 * ...
 * { tester: AutocompleteControlRendererTester, renderer: AutocompleteControlRenderer },
 * ...
 * </code></pre>
 * Furthermore you need to update your module.
 * <pre><code>
 * ...
 * imports: [JsonFormsAngularMaterialModule, MatAutocompleteModule],
 * declarations: [AutocompleteControlRenderer],
 * entryComponents: [AutocompleteControlRenderer]
 * ...
 * </code></pre>
 *
 */
@Component({
  selector: 'AutocompleteControlRenderer',
  template: `
  <ibm-combo-box
    [disabled]="!isEnabled()"
    [invalid]="$any(error)"
    [appendInline]="false"
    [invalidText]="$any(error)"
    [label]="label"
    [items]="filteredOptions"
    (selected)="onSelect($event)"
    (search)="onSearch($event)"
    >
    <ibm-dropdown-list></ibm-dropdown-list>
  </ibm-combo-box>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteControlRenderer extends JsonFormsControl {
  @Input() options?: string[];
  filteredOptions: any[] = [];
  shouldFilter!: boolean;

  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }
  getEventValue = (event: any) => event.target.value;

  ngOnInit() {
    super.ngOnInit();
    this.onSearch('');
  }



  onSelect(ev: any) {
    
    const path = composeWithUi(this.uischema as ControlElement, this.path);
    if (ev.item) {
      this.jsonFormsService.updateCore(Actions.update(path, () => ev.item.content));
    } else {
      this.jsonFormsService.updateCore(Actions.update(path, () => ''));
    }
    this.triggerValidation();
  }

  onSearch(val: string) {
		this.filteredOptions = (this.options || this.scopedSchema.enum || [])
      .filter(
        options => options.toLowerCase().includes(val.toLowerCase())
      )
      .map(option => {
        return {
          content: option
        }
      })
	}

  protected getOwnProps(): OwnPropsOfAutoComplete {
    return {
      ...super.getOwnProps(),
      options: this.options as any
    };
  }
}

export const enumControlTester: RankedTester = rankWith(2, isEnumControl);

interface OwnPropsOfAutoComplete extends OwnPropsOfControl {
  options: string[];
}
