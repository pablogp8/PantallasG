import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {CdkTableModule} from '@angular/cdk/table';
import { EstadosComponent } from './estados/estados.component';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatSelectModule,MatDividerModule,MatListModule,MatTableModule,MatIconModule,MatMenuModule} from '@angular/material';
import { OrdenpagoComponent } from './ordenpago/ordenpago.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


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
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatListModule,
  MatTableModule,
  MatIconModule,
  MatMenuModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
