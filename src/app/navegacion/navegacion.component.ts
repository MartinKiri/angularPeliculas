import { getLocaleId } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { UsabilidadService } from '../usabilidad.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit{

  data: any;

  constructor(private service: UsabilidadService) {}

  ngOnInit(): void {
    this.service.getgeneros()
    .subscribe(res=>{
      this.data= res
    })

  }

  buscar=(query:any) =>{
    sessionStorage.setItem('id', this.service.base_url+this.service.buscador+this.service.api_key+'&query='+query)
  }

}
