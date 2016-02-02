import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ControlOptionList} from "./control-option-list";
import {FormQueryItem} from "./form-queries";

@Component({
  selector: 'control-editor',
  providers: [],
  template: `
    <hr/>
    <div>
      Question Title: <input [(ngModel)]="item.name" >
      <select [(ngModel)]="item.kind">
        <option value="text">text</option>
        <option value="number">number</option>
        <option value="radio">radio</option>
        <option value="select">select</option>
      </select>
      <button (click)="removeSelf()">Remove</button>
    </div>
    <div *ngIf="item.optionsAllowed()">
      <control-option-list [model]="item">
      </control-option-list>
    </div>
  `,
  directives: [
      ControlOptionList
  ]
})
export class ControlEditor
{
  @Input() item : FormQueryItem;

  @Output() removed = new EventEmitter();

  removeSelf() {
    this.removed.emit(null);
  }

}
