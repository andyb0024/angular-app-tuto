import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../interceptors/auth.interceptor';


@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  form!: FormGroup;

  constructor(

              private router: Router ,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: '',
      password: ''

    });
  }
  submit() {
    this.http.post('http://127.0.0.1:8000/auth/login', this.form.getRawValue(), {withCredentials: true})
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.token;
        this.router.navigate(['album']);
      });
  }
}

