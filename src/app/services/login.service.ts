import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../models/User";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = environment.back + "/users/signIn";
  public connectEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  private connected : boolean = false;
  private actualUser : User = null;

  constructor(private http : HttpClient) {
  }

  public connect(email: String, password: String) {

    const parameters = "?email=" + email + "&password=" + password;

    return this.http.get(this.url + parameters).pipe(
      map(
        (fetchedUser) => {
        if(fetchedUser) {
          this.actualUser = User.formatFromBack(fetchedUser);
          this.connected = true;
          this.connectEvent.emit(this.connected);
          console.log(1);
          return true;
        }
        else {
          console.log(2);
          return false;
        }
      })
    );

  }

  public disconnect() {
    this.connected = false;
    this.actualUser = null;
  }

  public getStaticState() {
    return this.connected;
  }

  public getActualUser() {
    return this.connected ? this.actualUser : null;
  }

}
