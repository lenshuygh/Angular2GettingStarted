import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class ProductGuardService implements CanActivate {
  
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean  {
    //the product detail url  has 2 segments, product and the requested id, we only need the id so its [1]
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert("invalid product Id");
      this._router.navigate(['/products']);
      //return false to abort the navigation
      return false;
    };
    //return true to continue navigation
    return true;
  }
}
