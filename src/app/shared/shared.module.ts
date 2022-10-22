import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { Product1Component } from './components/product1/product1.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PagesHeaderComponent } from './components/pages-header/pages-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureComponent,
    Product1Component,
    NewsletterComponent,
    PagesHeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
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
