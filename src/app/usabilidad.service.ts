import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsabilidadService {
  public base_url = 'https://api.themoviedb.org/3/';
  public api_key = '?api_key=eedce99000ca3bb68a04c4499f45e2fb&language=es-ES';

  public generos = this.base_url + 'genre/movie/list' + this.api_key;

  public peliculasPopu = this.base_url + 'trending/movie/week' + this.api_key;
  public peliculas_url =
    this.base_url + 'discover/movie?sort_by=popularity.desc&' + this.api_key;
  public url_imagen = 'https://image.tmdb.org/t/p/w500';
  public buscador = 'search/movie';
  public ruta= sessionStorage.getItem('id')

  constructor(private http: HttpClient) {}

  getmovie = (url: any) => {
    return this.http.get(url);
  };
  getgeneros = () => {
    return this.http.get(this.generos);
  };
  getpelis = () => {
    return this.http.get(this.peliculasPopu);
  };
  getVideo_id(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=eedce99000ca3bb68a04c4499f45e2fb&language=es-ES`
    );
  }
  getPeli_id(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=eedce99000ca3bb68a04c4499f45e2fb&language=es-ES`
    );
  }
}
