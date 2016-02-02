import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FormQueryItem} from "./form-queries";

@Component({
  selector: 'control-preview',
  providers: [],
  template: `
    <h4>{{item.name}}</h4>
    <input *ngIf="item.kind === 'text'" (change)="setText($event.target.value)">
    <input *ngIf="item.kind === 'number'" type='number' (change)="setNumber($event.target.value)">
    <select *ngIf="item.kind === 'select'" (change)="setText($event.target.value)">
      <option *ngFor="#opt of item.options">{{opt.opt}}</option>
    </select>
    <form *ngIf="item.kind === 'radio'">
      <label *ngFor="#opt of item.options">
        <input type='radio' bind-name="item.name" (change)="setText(opt.opt)">
        {{item.name}} - {{opt.opt}}
      </label><br/>
    </form>
  `
})
export class ControlPreview
{
  @Input() item : FormQueryItem;

  setText(val) {
    this.item.setTextValue(val);
  }

  setNumber(val) {
    this.item.setNumericValue(parseInt(val));
  }

}
