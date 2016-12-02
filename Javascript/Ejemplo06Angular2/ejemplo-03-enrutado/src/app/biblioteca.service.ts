import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/Http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Libro } from './libro';

@Injectable()
export class BibliotecaService {

  private url = "http://localhost:3000/libros";

  constructor(private http: Http) {


   }

   getLibros(): Observable<Libro[]>{

     return this.http.get(this.url).map((response: Response)=>{
       return response.json()
     }).catch((error:any)=>{
       console.log("error al procesar la peticion");
       return Observable.throw(error.json().error || "Error de servidor");
     });

   }
   addLibro(body: Object): Observable<Libro>{
     let miLibroEnString = JSON.stringify(body);
     let miCabecera = new Headers({'Content-type': 'application/json'});

     let options = new RequestOptions({headers: miCabecera});

     return this.http.post(this.url,miLibroEnString,options).map((response: Response)=>{
       return response.json()
     }).catch((error:any)=>{
       console.log("error al procesar la peticion");
       return Observable.throw(error.json().error || "Error de servidor");
     });

   }
}
