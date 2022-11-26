import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private api_key = '?api_key=eedce99000ca3bb68a04c4499f45e2fb'
  private base_api = 'https://api.themoviedb.org/3/'
  // private buscar = this.api_key+'${}'+this.base_api
  // private genero =  this.api_key+'/genre/movie/list' + this.base_api
  private imgpeli = 'https://image.tmdb.org/t/p/w500'

  private prueba = 'https://api.themoviedb.org/3/movie/550?api_key=eedce99000ca3bb68a04c4499f45e2fb '

  constructor(private http : HttpClient) { }

  getPelis(){
    return this.http.get(this.prueba)
  }
  getImagen(url:string){
  return this.http.get(this.imgpeli+url)

  }
}
