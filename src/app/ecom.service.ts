import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcomService {

  private EcomEndPoint = "http://localhost:49580/api/";

  constructor(private httpClient : HttpClient){ }

  public sendGetRequest(route : string, path : string){
    let SetRoute = route + "/";
    let Setpath = path;
    let FullRoute = this.EcomEndPoint+""+SetRoute+""+Setpath;

    return this.httpClient.get(FullRoute);
  }
}