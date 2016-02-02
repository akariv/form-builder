import {Component} from 'angular2/core';
import {ControlEditorList} from './control-editor-list'
import {ControlEditorTitle} from './control-editor-title'

@Component({
  selector: 'form-builder-edit',
  providers: [],
  template: `
    <control-editor-title></control-editor-title>
    <control-editor-list></control-editor-list>
  `,
  directives:
    [ControlEditorList, ControlEditorTitle]
})
export class FormBuilderEdit {

}
