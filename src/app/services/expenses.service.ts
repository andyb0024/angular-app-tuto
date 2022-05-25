import { environment } from './../../environments/environment';
import { Album } from './../album';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {



  constructor(private httpClient:HttpClient) {}

  // getExpenses(){
  //   const url=`${this.baseUrl}album`;
  //   return this.httpClient.get(url);
  // }



  getExpenses(): Observable<Album[]> {
    const url=`${environment.baseUrl}album`;
    return this.httpClient.get<Album[]>(url)
    .pipe( )
  }
  find(id:number): Observable<Album> {

    const url=`${environment.baseUrl}` + 'album/' + id;
      console.log(id)
    return this.httpClient.get<Album>(url)
    .pipe()

  }

  getMembership(){
    const url=`${environment.baseUrl}` + 'membership';
    // console.log("url...."+url)
    return this.httpClient.get(url);
  }


  getMusic(id:number,slug:string){
    const url=`${environment.baseUrl}`+'album/'+`${id}/`+`${slug}`;
    return this.httpClient.get(url);
  }


  // login(username:string,password:string){
  //   const url=`${environment.baseUrl}`+'auth/login';
  //   return this.httpClient.post(url,{username,password}).pipe(
  //     tap((response:any)=>{
  //       localStorage.setItem("auth",response.tokens)
  //       console.log(response.tokens)
  //     })
  //   )
  // }


  // signIn(){

  // }
}
