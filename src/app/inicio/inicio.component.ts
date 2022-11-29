import { Component, OnInit} from '@angular/core';
import { UsabilidadService } from '../usabilidad.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public page!: number;
  data: any;
  muestra: any;
  muestraimg :string=this.service.url_imagen;


  constructor(private service: UsabilidadService) {}

  ngOnInit(): void {
    this.service.getgeneros().subscribe((res) => {
      this.data = res;
      // generos
      console.log(this.data)
    });
    this.service.getpelis().subscribe((res1) => {
      this.muestra = res1;
      // paginas
      console.log(this.muestra);
    });
  }
}
