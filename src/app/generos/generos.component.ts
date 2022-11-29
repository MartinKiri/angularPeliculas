import { Component, OnInit ,Input} from '@angular/core';
import { UsabilidadService } from '../usabilidad.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
})
export class GenerosComponent implements OnInit {

  @Input() id='';
  
  pinta:string= this.service.url_imagen

  constructor(private service: UsabilidadService) {}

  ngOnInit(): void {
    
  }

  setMovieDetails = (id: any) => {
    sessionStorage.setItem('id', this.service.base_url + 'movie' + id + + this.service.api_key);
    console.log(id)
  }

}