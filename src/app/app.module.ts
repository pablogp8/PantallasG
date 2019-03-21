import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EstadosComponent } from './estados/estados.component';
import {MatButtonModule, MatCheckboxModule MatInputModule} from '@angular/material';
import { OrdenpagoComponent } from './ordenpago/ordenpago.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    OrdenpagoComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MatButtonModule, 
	MatCheckboxModule,
	FormsModule,MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
