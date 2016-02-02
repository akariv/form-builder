import {Component} from 'angular2/core';
import {ControlEditor} from "./control-editor";
import {FormQueries, FormQueryItem} from "./form-queries";

@Component({
  selector: 'control-editor-list',
  providers: [],
  template: `
    <control-editor *ngFor="#item of formQueries.items" [item]="item" (removed)="remove(item)"></control-editor>
    <hr/>
    <button (click)="addNew()">Add New</button>
  `,
  directives: [
      ControlEditor
  ]
})
export class ControlEditorList {

  constructor( public formQueries: FormQueries ) {

  }

  addNew() {
    this.formQueries.add(new FormQueryItem('Question number X','select'));
  }

  remove(item) {
    this.formQueries.items = this.formQueries.items.filter(x => x !== item);
  }

}
