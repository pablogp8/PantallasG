import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})

export class DialogoComponent {

  animal: string;
  name: string;

  constructor(public dialog : MatDialog) {}
  
  openDialog(): void {
      
    const dialogRef = this.dialog.open(VentanaEmergente, {
       width: '250px', 
       data: {name: this.name, animal: this.animal}
    });

    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  
  }
  
}

@Component({
  selector: 'app-ventanaEmergente',
  templateUrl: './ventanaEmergente.html',
})

export class VentanaEmergente {
  constructor(
    public dialogRef: MatDialogRef<VentanaEmergente>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
  


