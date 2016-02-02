import {Component} from 'angular2/core';


@Component({
  selector: 'form-builder-app',
  providers: [],
  templateUrl: 'app/form-builder.html',
  directives: [],
  pipes: []
})
export class FormBuilderApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
