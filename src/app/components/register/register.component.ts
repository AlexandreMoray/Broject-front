import { Component, OnInit } from '@angular/core';
import { Snackbars } from "../../addons/snackbars";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = {
    firstName : "",
    lastName : "",
    alias : "",
    email : "",
    password1 : "",
    password2 : ""
  }

  constructor(private matSnackBar : MatSnackBar,
              private userService : UserService) { }

  ngOnInit() {
  }

  register() {
    let u = this.form;

    if(u.firstName.length > 1 && u.alias.length > 1 && u.email.length > 1) {
      if( u.password1.length >= 4 && u.password2.length >= 4 && u.password1 == u.password2) {
        //console.log(this.form);
        let newUser = new User(this.form.firstName, this.form.lastName, this.form.alias, this.form.email, this.form.password1);
        this.userService.post(newUser.formatFromFront());
      } else {
        Snackbars.openSnackBar(this.matSnackBar, "Password don't match or are invalid", "OK");
      }
    } else {
      Snackbars.openSnackBar(this.matSnackBar, "Name & Alias & Email must be at least 3 char long", "OK");
    }
  }

}
