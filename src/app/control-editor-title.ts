import {Component} from 'angular2/core';
import {FormQueries} from './form-queries'

@Component({
  selector: 'control-editor-title',
  providers: [],
  template: `
    <label>Title</label>
    <input [(ngModel)]="formQueries.name">
  `
})
export class ControlEditorTitle {

  constructor( public formQueries: FormQueries ) {

  }
}
