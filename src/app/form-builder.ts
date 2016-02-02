import {Component} from 'angular2/core';
import {RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';
import {FormBuilderEdit} from './form-builder-edit';
import {FormBuilderPreview} from './form-builder-preview';

@RouteConfig([
  {path: '/edit', name: 'Edit', component: FormBuilderEdit, useAsDefault: true},
  {path: '/preview', name: 'Preview', component: FormBuilderPreview}
])
@Component({
  selector: 'form-builder-app',
  template: `
    <nav>
      <a [routerLink]="['Edit']">Edit</a>
      <a [routerLink]="['Preview']">Preview</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet, RouterLink]
})
export class FormBuilderApp {

}
