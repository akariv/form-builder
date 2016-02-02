import {Component, Input} from 'angular2/core';
import {OptionEditor} from "./option-editor";
import {FormQueryItem} from "./form-queries";
import {FormQueryItemOption} from "./form-queries";

@Component({
  selector: 'control-option-list',
  providers: [],
  template: `
    <option-editor *ngFor="#opt of model.options" [opt]="opt" (removed)="remove(opt)"></option-editor>
    <br/>
    <button (click)="addNew()">Add Option</button>
  `,
  directives: [
      OptionEditor
  ]
})
export class ControlOptionList {

  @Input() model : FormQueryItem;

  constructor() {

  }

  addNew() {
    this.model.addOption( new FormQueryItemOption('new option') );
  }

  remove(opt) {
    console.log('want to remove',opt);
    this.model.options = this.model.options.filter(x => x !== opt);
  }

}
