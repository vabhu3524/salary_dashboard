import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private httpService: HttpService) { }

  username: any = "";
  password: any = "";
  response: any = "";

  ngOnInit(): void {

  }

  onLogin() {

    console.log(this.username);
    console.log(this.password);
    var obj = { "username": this.username, "password": this.password };

    this.httpService.postHttpCall("login", obj).subscribe((data: any) => {
      if (data.status) {
        this.response = "";
        this.router.navigateByUrl('/salary');
      } else {
        this.response = data.responseString;
      }
    });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json'); 
    // var obj={"username":this.username,"password":this.password};
    // this.http.post("http://localhost:3000/login",obj,{headers:headers}).subscribe((data:any)=>{
    //   console.log(data);
    //   if(data.status){
    //     this.response="";
    //     this.router.navigateByUrl('/salary');

    //   }else{
    //   this.response=data.responseString;
    //   }
    // });

  }

}
