import { Component, OnInit } from '@angular/core';
import { UsabilidadService } from '../usabilidad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vistadetalle',
  templateUrl: './vistadetalle.component.html',
  styleUrls: ['./vistadetalle.component.css'],
})
export class VistadetalleComponent implements OnInit {
  datos: any;
  muestraimagen: any;
  linkYou: string = 'https://www.youtube.com/watch?v=';
  video: any;
  id: any;


  
  constructor(
    private ruta: ActivatedRoute,
    private service: UsabilidadService
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');

    this.service.getPeli_id(this.id).subscribe((res) => {
      this.datos = res;
      this.muestraimagen = this.service.url_imagen + this.datos.poster_path;
      console.log(this.datos);
    });
    this.service.getVideo_id(this.id).subscribe((vista) => {
      this.video = vista;
    });
  }
}
