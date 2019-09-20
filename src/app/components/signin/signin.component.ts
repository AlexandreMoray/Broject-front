import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output()
  public connectedEvent : EventEmitter<String> = new EventEmitter<String>();

  public login = { email:'', password:'' };

  constructor( private loginService : LoginService) { }

  ngOnInit() {
  }

  tryLogin() {
    this.loginService.connect(this.login.email, this.login.password);
  }

}
