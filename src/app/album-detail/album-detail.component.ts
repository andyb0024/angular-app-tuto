import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { date } from 'joi';
import { Album } from '../album';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albums:Album |any;


  constructor(  private route: ActivatedRoute,private service:ExpensesService ) { }

  ngOnInit(): void {
    this.loadAlbum()
  }

  loadAlbum():void{
   const id = this.route.snapshot.params['id'];

    this.service.find(id).subscribe((response:any)=>{
      this.albums=response
        console.log(" posting ",response)
      })
  }

}
