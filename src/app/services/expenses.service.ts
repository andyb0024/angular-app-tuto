import { Album } from './../album';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private baseUrl='http://127.0.0.1:8000/';


  constructor(private httpClient:HttpClient) {}

  // getExpenses(){
  //   const url=`${this.baseUrl}album`;
  //   return this.httpClient.get(url);
  // }


  getExpenses(): Observable<Album[]> {
    const url=this.baseUrl + 'album';
    return this.httpClient.get<Album[]>(url)
    .pipe( )
  }
  find(id:number): Observable<Album> {

    const url=this.baseUrl + 'album/' + id;
      console.log(id)
    return this.httpClient.get<Album>(url)
    .pipe()

  }


}
