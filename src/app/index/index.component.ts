import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  data: any;
  imagenmuestra:string="https://image.tmdb.org/t/p/w500";
  muestraimagen:any;

  constructor( private service : ServiciosService) {
  
  }


  ngOnInit(): void {
    this.service.getPelis().subscribe((res) => {
      this.data = res;
      this.muestraimagen= this.imagenmuestra+this.data.poster_path
      // console.log((this.imagenmuestra+this.data.poster_path))
      // this.imagenmuestra =
      // this.imagenmuestra = this.service.getImagen(this.data.poster_path)
      console.log(this.data)
      console.log(this.data.genres)
    });
  }
}
