import { Component,inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatSnackBar} from '@angular/material/snack-bar';

import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [MatTabsModule,MatInputModule,FormsModule, MatFormFieldModule,MatDividerModule,MatButtonModule,MatProgressBarModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string = "Rutvik";
  lastName:string = "Pandya"
  
  rollNo:number = 1;
  rollNumberPlaceholder:string = "Enter Roll Number";

  progressbarValue:number=40;

  constructor(){
    console.log(this.firstName)
  }
  private _snackBar = inject(MatSnackBar);
  showWelcome(){
    this._snackBar.open("Hello", "Done");
  }
}
