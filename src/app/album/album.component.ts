import { Album } from './../album';
import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums:Album[]=[];

  constructor(private service:ExpensesService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.service.getExpenses()
    .subscribe((response:any)=>{
    this.albums=response
      console.log(" posting ",response)
    })
  }

}
