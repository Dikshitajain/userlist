import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){ }
  api = environment.apiendpoint

  addusers(user: any){
    return this.http.post(this.api+'users', user);
  }

  getusers(){
    return this.http.get(this.api+'users');
  }
}
