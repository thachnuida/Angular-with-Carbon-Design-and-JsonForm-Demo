import { Component } from '@angular/core';
import { angularCarbonlRenderers } from './components/jsonforms-carbon-renderers';
import uischemaAsset from '../assets/uischema.json';
import schemaAsset from '../assets/schema.json';
import dataAsset from './data';
import AJV from 'ajv';
import { and, createAjv, isControl, optionIs, rankWith, schemaTypeIs, scopeEndsWith, Tester } from '@jsonforms/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  renderers = angularCarbonlRenderers;
  uischema = uischemaAsset;
  schema = schemaAsset;
  data = dataAsset;
  ajv = createAjv({
    schemaId: 'auto' as any,
    allErrors: true
  });

  onDateChange(event: any) {
    console.log(event);
  }
}
