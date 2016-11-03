import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {About1Component} from './components/about/about1/about1.component';
import {About2Component} from './components/about/about2/about2.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}
];

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
        // component: AboutComponent,
        // redirectTo: '/about1',
        children: [
          {
            path: 'about1',
            component: About1Component
          },
          {
            path: 'about2',
            component: About2Component
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

