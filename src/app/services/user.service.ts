import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.back + "/users";

  constructor(private http : HttpClient) {
  }

  get(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  getByAlias(userAlias: String) {
    return this.http.get(this.url + "/alias/" + userAlias);
  }

  getProjects(userId : number) {
    return this.http.get(this.url + "/project/" + userId);
  }

  getAll() {
    return this.http.get(this.url);
  }

  post(user : any) {
    return this.http.post(this.url, user);
  }

  put(id: number, user : User) {

    return this.http.post(this.url + "/" + id, user).subscribe();
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}
