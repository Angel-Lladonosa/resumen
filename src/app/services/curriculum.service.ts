import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  url: string;

  constructor(private http:HttpClient) {
    this.url = 'http://localhost:4200/assets'
  }

  getCv(profile:string = 'profile'){
    return this.http.get<any>(`${this.url}/${profile}.json`);
  }
}
