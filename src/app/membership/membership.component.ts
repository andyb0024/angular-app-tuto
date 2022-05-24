import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
membership:any;
color!:"Medium";
  constructor(private service:ExpensesService) { }

  ngOnInit(): void {
   this.getMembershipType();
    this.getColor()
  }

  getMembershipType(){
    this.service.getMembership()
    .subscribe((response:any) => {
      this.membership = response;

    });

  }

getColor(){
  this.service.getMembership()
  .subscribe((response:any) => {
    this.membership = response;

    if(this.membership[1].membership_type===this.color){
      console.log("1")
    }
  });

}
}
