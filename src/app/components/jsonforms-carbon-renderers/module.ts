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
import { CommonModule } from '@angular/common';
import { DialogModule, GridModule } from 'carbon-components-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { 
  CheckboxModule,
  ToggleModule,
  ComboBoxModule,
  InputModule,
  SliderModule,
  DatePickerModule,
  TabsModule,
} from 'carbon-components-angular';

import { AddAltModule, TrashCanModule } from '@carbon/icons-angular';

import { JsonFormsModule } from '@jsonforms/angular';
import { AutocompleteControlRenderer } from './controls/autocomplete.renderer';
import { BooleanControlRenderer } from './controls/boolean.renderer';
import { DateControlRenderer } from './controls/date.renderer';
import { NumberControlRenderer } from './controls/number.renderer';
import { RangeControlRenderer } from './controls/range.renderer';
import { TextAreaRenderer } from './controls/textarea.renderer';
import { TextControlRenderer } from './controls/text.renderer';
import { ToggleControlRenderer } from './controls/toggle.renderer';
import { LabelRenderer } from './other/label.renderer';
import { ObjectControlRenderer } from './other/object.renderer';
import { CategorizationTabLayoutRenderer } from './layouts/categorization-layout.renderer';
import { GroupLayoutRenderer } from './layouts/group-layout.renderer';
import { HorizontalLayoutRenderer } from './layouts/horizontal-layout.renderer';
import { VerticalLayoutRenderer } from './layouts/vertical-layout.renderer';
import { ArrayLayoutRenderer } from './layouts/array-layout.renderer';

@NgModule({
  imports: [
    CommonModule,
    JsonFormsModule,
    ReactiveFormsModule,
    GridModule,
    DialogModule,
    AddAltModule,
    TrashCanModule,
    CheckboxModule,
    ToggleModule,
    ComboBoxModule,
    InputModule,
    SliderModule,
    DatePickerModule,
    TabsModule,
  ],
  declarations: [
    BooleanControlRenderer,
    TextAreaRenderer,
    TextControlRenderer,
    NumberControlRenderer,
    RangeControlRenderer,
    DateControlRenderer,
    ToggleControlRenderer,
    VerticalLayoutRenderer,
    HorizontalLayoutRenderer,
    CategorizationTabLayoutRenderer,
    GroupLayoutRenderer,
    LabelRenderer,
    ObjectControlRenderer,
    AutocompleteControlRenderer,
    ArrayLayoutRenderer
  ],
  entryComponents: [
    BooleanControlRenderer,
    TextAreaRenderer,
    TextControlRenderer,
    NumberControlRenderer,
    RangeControlRenderer,
    DateControlRenderer,
    ToggleControlRenderer,
    VerticalLayoutRenderer,
    HorizontalLayoutRenderer,
    GroupLayoutRenderer,
    LabelRenderer,
    CategorizationTabLayoutRenderer,
    ObjectControlRenderer,
    AutocompleteControlRenderer,
    ArrayLayoutRenderer
  ],
  exports: [
    CommonModule,
    JsonFormsModule,
    ReactiveFormsModule,
    GridModule,
    DialogModule,
    AddAltModule,
    TrashCanModule,
    CheckboxModule,
    ToggleModule,
    ComboBoxModule,
    InputModule,
    SliderModule,
    DatePickerModule,
    TabsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class JsonFormsAngularCarbonModule { }
