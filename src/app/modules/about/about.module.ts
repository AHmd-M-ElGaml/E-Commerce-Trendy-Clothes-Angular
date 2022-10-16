import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent
  },
];

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutAppComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutModule { }
