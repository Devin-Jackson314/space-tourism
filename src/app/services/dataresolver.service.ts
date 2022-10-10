import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot,} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';


  
  interface planets{
  description: string;
  distance: string;
  name: string;
  travel: string;
  images: object;
  }
  @Injectable({
  providedIn: 'root'
})
export class DataresolverService implements Resolve<planets>{
   constructor(private dataservice: DataService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<planets> | Promise<planets> | planets{
    console.log(route.parent?.routeConfig?.path!, "whats in get data")
      if (route.parent?.routeConfig?.path! == 'destination') {
         return this.dataservice.getData('destinations')
      } else { 
        return this.dataservice.getData(route.parent?.routeConfig?.path!)
     
      }
      
  }
 
}
