import { Component, Input, ViewChild } from '@angular/core';
import {
  BreakpointObserver,

} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ExpensesService } from './services/expenses.service';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  collapsed=false;

  title = 'Tour of Heroes';
  constructor(private observer:BreakpointObserver){}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed;

  }




}
