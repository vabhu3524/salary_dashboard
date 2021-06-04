import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  service_ip=environment.server_ip;
  constructor(private http:HttpClient) { }

  postHttpCall(method,param):Observable<any>{

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json'); 
    return this.http.post(this.service_ip+method,param,{headers:headers});
  }

}
