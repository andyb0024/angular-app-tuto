import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
musics:any;
  constructor(private route: ActivatedRoute,private service:ExpensesService) { }

  ngOnInit(): void {
    this.loadMusic()
  }



  loadMusic():void{
    console.log(this.route.snapshot.params)
   const id:number = this.route.snapshot.params['id'];
  const slug:string = this.route.snapshot.params['slug'];
  this.service.getMusic(id,slug).subscribe((response:any)=>{
    this.musics=response
      console.log(" music ",response)
    })
 
      
   }

}
