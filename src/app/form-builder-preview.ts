import {Component} from 'angular2/core';
import {FormQueries} from "./form-queries";
import {ControlPreview} from "./control-preview";

@Component({
  selector: 'form-builder-preview',
  providers: [],
  template: `
    <h1>{{form.name}}</h1>
    <control-preview *ngFor="#item of form.items" [item]="item"></control-preview>
    <hr/>
    <button (click)="submit()">Submit</button>
    <pre>{{ data | json }}</pre>
  `,
  directives: [
      ControlPreview
  ]
})
export class FormBuilderPreview {

  data = {};

  constructor( public form : FormQueries) {
  }

  submit() {
    this.data = this.form.getData();
    console.log(this.data);
  }

}
