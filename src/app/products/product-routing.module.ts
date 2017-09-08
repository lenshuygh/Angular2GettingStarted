import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  imports: [
    //forChild -> ensures that we don't register the routing service provider a second time
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductGuardService],
      component: ProductDetailComponent}
    ])
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
