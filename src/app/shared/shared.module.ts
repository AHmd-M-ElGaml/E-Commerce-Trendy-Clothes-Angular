import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { Product1Component } from './components/product1/product1.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PagesHeaderComponent } from './components/pages-header/pages-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    FeatureComponent,
    Product1Component,
    NewsletterComponent,
    PagesHeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureComponent,
    Product1Component,
    NewsletterComponent,
    PagesHeaderComponent,
    PaginationComponent
  ],
})
export class SharedModule { }
