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
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {
  getLocale,
  isDateControl,
  RankedTester,
  rankWith
} from '@jsonforms/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { DatePicker } from 'carbon-components-angular';

@Component({
  selector: 'DateControlRenderer',
  template: `
    <ibm-date-picker
      #datePicker
      [label]="label"
      [id]="id"
      (valueChange)="onChange($event)"
      [value]="data"
      [disabled]="!isEnabled()"
      [invalid]="$any(error)"
      [invalidText]="$any(error)"
      [placeholder]="getDateFormat()"
      [dateFormat]="getDateFormat()"
      >
    </ibm-date-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateControlRenderer extends JsonFormsControl {
  @ViewChild('datePicker', {static: true}) datePicker!: DatePicker;
  constructor(
    jsonformsService: JsonFormsAngularService,

  ) {
    super(jsonformsService);
    
  }

  ngOnInit(): void {
    super.ngOnInit();
    // Replace id format so that it is not cause carbon date picker error
    this.id = this.id.replace('#', '_').replace(/\//g, '-');
    if (this.data) {
      this.datePicker.input.value = this.data;
    }
  }

  mapAdditionalProps() {


  }

  getDateFormat() {
    return this.uischema.options?.dateFormat || 'Y-m-d';
  }

  getEventValue = (event: any) => {
    return event[0].toISOString().substr(0, 10);
  } 
}

export const DateControlRendererTester: RankedTester = rankWith(
  2,
  isDateControl
);
