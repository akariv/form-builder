import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'option-editor',
  providers: [],
  template: `
    <div>
      <input [(ngModel)]="opt.opt"><button (click)="removeSelf()">Remove</button>
    </div>
  `
})
export class OptionEditor
{
  @Input() opt;
  @Output() removed = new EventEmitter();

  removeSelf() {
    console.log('want to remove me',this.opt);
    this.removed.emit(null);
  }

}
