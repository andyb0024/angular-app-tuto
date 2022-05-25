import { AuthService } from './../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() sidenavData!: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }

}
