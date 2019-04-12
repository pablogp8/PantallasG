import {A11yModule} from '@angular/cdk/a11y';
import {MatNativeDateModule} from '@angular/material';

//probando import para el dialog 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {CdkTableModule} from '@angular/cdk/table';
import { EstadosComponent } from './estados/estados.component';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatSelectModule,MatDividerModule,MatListModule,MatTableModule,MatIconModule,MatMenuModule,MatDialogModule} from '@angular/material';
import { OrdenpagoComponent,DialogOverviewExampleDialog } from './ordenpago/ordenpago.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    OrdenpagoComponent,
    DialogOverviewExampleDialog
    
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
  MatDialogModule,

  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
