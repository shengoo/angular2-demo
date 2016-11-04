import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {About1Component} from './about1/about1.component';
import {About2Component} from './about2/about2.component';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent {
  code = `
const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent  }
];

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
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
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
  `;
}
