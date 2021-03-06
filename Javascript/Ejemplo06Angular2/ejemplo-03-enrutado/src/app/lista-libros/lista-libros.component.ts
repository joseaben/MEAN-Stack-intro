import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../Biblioteca.service';
import { Libro } from '../libro';
@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  providers: [BibliotecaService]
})
export class ListaLibrosComponent implements OnInit {
  private libros: Libro[]

  constructor(private service: BibliotecaService) {
    this.service.getLibros().subscribe((datos)=>{
      this.libros = datos;
    },(error)=>{
      console.log("Error ", error);
    },()=>{console.log("Completada")});
  }

  ngOnInit() {
  }

}
