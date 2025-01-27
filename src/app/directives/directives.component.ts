
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,MatSlideToggleModule,MatButtonModule,MatCardModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  agreeOrNot = false;
  AgreeOrDisagree(){
    if(this.agreeOrNot)  
      this.agreeOrNot=false;
    else
      this.agreeOrNot=true;
  }

  cities:string[] = ["Petlad","Anand","Ahmedabad","Vadodara"]
  employees:any[] = [
    {
      empId:101,
      empname:"Rutvik",
      city:this.cities[0],
      mobileNo:"8141227852"
    },
    {
      empId:102,
      empname:"Preet",
      city:this.cities[1],
      mobileNo:"8511850796"
    },
    {
      empId:103,
      empname:"Krupal",
      city:this.cities[2],
      mobileNo:"8200041123"
    },
  ]
  selectedEmployee:any={
    empId:0,
    empname:"",
    city:this.cities[0],
    mobileNo:""
  };

  onSelected(selectedEmpId:any){
    this.employees.forEach(element => {
      if(element.empId == selectedEmpId)
        this.selectedEmployee=element
    });
  }
}
