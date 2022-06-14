import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3001/api/table';

  create(data:any):Observable<any> {
    return this.http.post(this.apiURL, data)
  };

  getData():Observable<any> {
    return this.http.get(this.apiURL)
  };

  update(id:any,data:any):Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, data)
  };

  delete(id:any):Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`)
  };
}
