import { Component, OnInit } from '@angular/core';
import {Libro} from '../modelo/libro';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private libro: Libro;
  constructor() {
    this.libro = new Libro("","");
   }

  ngOnInit() {
  }

  enviarFormulario(formulario: any){
    console.log("Datos del formulario enviado: " + formulario);
    console.log("Libro: " + this.libro);
  }

}
