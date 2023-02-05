import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestcallService {

  constructor(private http:HttpClient) { }

  public submit(model: Model){
    return this.http.post("http://a4f3ac003efdc43cc8d8536c84f2fcd8-897883009.us-east-1.elb.amazonaws.com:8081/submitSurvey", model);
  }

  public fetch(){
    return this.http.get("http://a4f3ac003efdc43cc8d8536c84f2fcd8-897883009.us-east-1.elb.amazonaws.com:8081/getAllSurveys");
  }
}
