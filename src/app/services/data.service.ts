import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  fireBaseUrl = "https://space-tourism-e3c27-default-rtdb.firebaseio.com/";
  jsonExt = ".json";
  Url = `${this.fireBaseUrl}${this.jsonExt}`
  constructor(private http: HttpClient) { }

  getData(field: string): Observable<any> {
    this.Url = `${this.fireBaseUrl}${field}${this.jsonExt}`
   return this.http.get(this.Url);
  }
   
}
