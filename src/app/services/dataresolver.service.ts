import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
  
  interface planets{
  description: string;
  distance: string;
  name: string;
  travel: string;
  }
export class DataresolverService implements Resolve<planets>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<planets> | Promise<planets> | planets{
    return this.dataservice.getData('destinations')
  }
  constructor(private dataservice: DataService) { }
}
