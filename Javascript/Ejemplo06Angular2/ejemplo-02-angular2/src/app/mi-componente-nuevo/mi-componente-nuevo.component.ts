import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente-nuevo',
  templateUrl: './mi-componente-nuevo.component.html',
  //templete:'<p>Hola</P>
  styleUrls: ['./mi-componente-nuevo.component.css']
  //styles:[`background-color:red`]
})
export class MiComponenteNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Inicializado mi nuevo componente");
  }

}
