import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
isLoggedIn$=this._isLoggedIn$.asObservable()

  constructor(private httpClient:HttpClient) {

    const token=sessionStorage.getItem('auth')
    this._isLoggedIn$.next(!!token)
  }

  login(username:string,password:string){
    const url=`${environment.baseUrl}`+'auth/login';
    return this.httpClient.post(url,{username,password}).pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(true)
        sessionStorage.setItem('auth',response.tokens)

        console.log(response.tokens)
      })
    )
  }
}
