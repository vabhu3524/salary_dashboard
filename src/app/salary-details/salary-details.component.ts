import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.css']
})
export class SalaryDetailsComponent implements OnInit {

  employee_name:String="";
  employee_salary:Number=0;
  employee_deductions:Number=0;
  salary_after_deduct:Number=0;
  response:String;
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    var val=Number(this.employee_deductions)/100;
    this.salary_after_deduct=Number(this.employee_salary) -(Number(this.employee_salary)*val);
    var obj={name:this.employee_name,salary:this.employee_salary,salAfterDeduction:this.employee_deductions};
    this.httpService.postHttpCall("insertdetails",obj).subscribe((data:any)=>{
        if (data.status) {
          this.response = "";
          this.response = data.responseString;
         // this.router.navigateByUrl('/salary');
        } else {
          this.response = data.responseString;
        }
    })
  }
}
