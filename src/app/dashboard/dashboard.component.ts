import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
posts:any;
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,private service:ExpensesService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.expenses();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    // .subscribe(heroes => this.heroes = heroes);
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));

  }

  // expenses(){
  //   this.service.getExpenses()
  //   .subscribe((response:any)=>{
  //   this.posts=response.results
  //     console.log(" posting ",response.results)
  //   })

  expenses(){
    this.service.getExpenses()
    .subscribe((response:any)=>{
    this.posts=response
      console.log(" posting ",response)
    })
  }

}
