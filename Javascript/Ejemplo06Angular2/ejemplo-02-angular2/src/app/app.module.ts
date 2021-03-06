import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiComponenteNuevoComponent } from './mi-componente-nuevo/mi-componente-nuevo.component';
import { Ejemplo01NgforNgifComponent } from './ejemplo01-ngfor-ngif/ejemplo01-ngfor-ngif.component';
import { NumerosPrimosComponent } from './numeros-primos/numeros-primos.component';
import { NumerosPrimosConServicioComponent } from './numeros-primos-con-servicio/numeros-primos-con-servicio.component';
import { NumerosPrimosLeyendaComponent } from './numeros-primos-leyenda/numeros-primos-leyenda.component';
import { NumerosPrimosFilaComponent } from './numeros-primos-fila/numeros-primos-fila.component';
import { NumerosPrimosPanelComponent } from './numeros-primos-panel/numeros-primos-panel.component';
import { MostrarDatosTablaComponent } from './mostrar-datos-tabla/mostrar-datos-tabla.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteNuevoComponent,
    Ejemplo01NgforNgifComponent,
    NumerosPrimosComponent,
    NumerosPrimosConServicioComponent,
    NumerosPrimosLeyendaComponent,
    NumerosPrimosFilaComponent,
    NumerosPrimosPanelComponent,
    MostrarDatosTablaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FormularioComponent]
})
export class AppModule { }
