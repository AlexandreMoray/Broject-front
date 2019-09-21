import { Component, OnInit } from '@angular/core';
import { Snackbars } from "../../addons/snackbars";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = {
    name : "",
    alias : "",
    email : "",
    password1 : "",
    password2 : ""
  }

  constructor(private matSnackBar : MatSnackBar) { }

  ngOnInit() {
  }

  register() {
    let u = this.form;

    if(u.name.length > 1 && u.alias.length > 1 && u.email.length > 1) {
      if( u.password1.length >= 4 && u.password2.length >= 4 && u.password1 == u.password2) {
        console.log(this.form);
      } else {
        Snackbars.openSnackBar(this.matSnackBar, "Password don't match or are invalid", "OK");
      }
    } else {
      Snackbars.openSnackBar(this.matSnackBar, "Name & Alias & Email must be at least 3 char long", "OK");
    }
  }

}
