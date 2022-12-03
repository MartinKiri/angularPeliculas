import { Component, OnInit ,Input} from '@angular/core';
import { UsabilidadService } from '../usabilidad.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
})
export class GenerosComponent implements OnInit {

  id='';
  ruta:any;
  buscada:any
  pinta:string= this.service.url_imagen
  

  constructor(private service: UsabilidadService) {}
  
  ngOnInit(): void {
    this.ruta= console.log(sessionStorage.getItem('id'))
    this.service.search(this.ruta).subscribe((ids)=>{
      this.buscada= ids;
      console.log(this.buscada);
      
      
    })
  }

  setMovieDetails = (id: any) => {
    sessionStorage.setItem('id', this.service.base_url + 'movie' + id + + this.service.api_key);
  }

}