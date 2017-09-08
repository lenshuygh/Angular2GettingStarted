import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //the listing order of productModule and appRoutingModule is important
    //the order of the modules in here defins the order in wich the routes are registered
    //in AppRoutingModule the wildcards are registered, if these are registered before the 
    //product routes and the product routes would neer be accessible 
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
