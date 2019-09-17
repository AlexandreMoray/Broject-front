import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public connectEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  private connected : boolean = false;
  private actualUser : User = null;

  constructor() {
  }

  public connect(email: String, password: String) {

    let fetchedUser = new User("tester");
    fetchedUser.email = "tester";
    fetchedUser.password = "tester";
    fetchedUser.alias = 'admin';

    if(fetchedUser.email == email) {
      if (fetchedUser.password == password) {
        this.actualUser = fetchedUser;
        this.connected = true;
        this.connectEvent.emit(this.connected);
      }
    }
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
