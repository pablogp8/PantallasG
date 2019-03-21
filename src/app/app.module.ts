import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EstadosComponent } from './estados/estados.component';
<<<<<<< HEAD
import {MatButtonModule, MatCheckboxModule MatInputModule} from '@angular/material';
import { OrdenpagoComponent } from './ordenpago/ordenpago.component';
import {FormsModule} from '@angular/forms';
=======
import { MatButtonModule, MatCheckboxModule,MatTableModule,MatTabsModule} from '@angular/material';
import { OrdenpagoComponent } from './ordenpago/ordenpago.component'; 
import { MatInputModule } from '@angular/material/input';



>>>>>>> a57b8cc574a92c4bf7260d8150520b4a2a1e33ac

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
<<<<<<< HEAD
	FormsModule,MatInputModule,
=======
  MatInputModule,
  MatTableModule,
  MatTabsModule,
  
>>>>>>> a57b8cc574a92c4bf7260d8150520b4a2a1e33ac
  ],
  

  
  providers: [],
  bootstrap: [AppComponent],

  })


export class AppModule { }

