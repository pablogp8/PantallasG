
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EstadosComponent } from './estados/estados.component';
import { MatButtonModule, MatCheckboxModule,MatTableModule,MatTabsModule, MatDialogModule} from '@angular/material';
import { OrdenpagoComponent } from './ordenpago/ordenpago.component'; 
import { MatInputModule } from '@angular/material/input';
import { DialogoComponent,VentanaEmergente } from './dialogo/dialogo.component';
import { EjemplopComponent } from './ejemplop/ejemplop.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    OrdenpagoComponent,
    DialogoComponent,  
    EjemplopComponent,
    VentanaEmergente,
  
  ],
  imports: [
  BrowserModule,
	BrowserAnimationsModule,
	MatButtonModule, 
	MatCheckboxModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule,
  HttpClientModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  FormsModule,
  MatDialogModule,
 
  ],
  entryComponents: [VentanaEmergente],
  providers: [],
  bootstrap: [AppComponent],

  })


export class AppModule { }

