import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {LoginService} from "../../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Snackbars} from "../../addons/snackbars";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output()
  public connectedEvent : EventEmitter<String> = new EventEmitter<String>();

  public login = { email:'', password:'' };

  constructor( private loginService : LoginService,
              private matSnackBar : MatSnackBar) { }

  ngOnInit() {
  }

  tryLogin() {
    this.loginService.connect(this.login.email, this.login.password).subscribe(
      (result : boolean) => {
        console.log(result);
        if(!result) {
          Snackbars.openSnackBar(this.matSnackBar, "Authentification failed", "OK");
        } else {
          Snackbars.openSnackBar(this.matSnackBar, "You are now logged in", "OK");
        }
      }
    );
  }

}
