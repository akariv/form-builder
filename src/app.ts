import {bootstrap} from 'angular2/platform/browser';
import {FormBuilderApp} from './app/form-builder';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(FormBuilderApp, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
