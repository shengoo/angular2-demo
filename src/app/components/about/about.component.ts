import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {About1Component} from './about1/about1.component';
import {About2Component} from './about2/about2.component';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html'
})
// RouterModule.forChild()
// @RouteConfig([
//   {path: '/', name: 'All', component: AboutComponent, useAsDefault: true},
//   {path: '/about1', name: 'about1', component: About1Component},
//   {path: '/about2', name: 'about2', component: About2Component}
// ])
export class AboutComponent {

}
