import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public connected : boolean = false;

  constructor(private loginService : LoginService,
              private router : Router) { }

  ngOnInit() {
    this.loginService.connectEvent.subscribe(
      connected => {
        if (connected) {
          this.connected = true;
          this.router.navigate(["/"]);
        }
      });
  }

  public logout() {
    this.connected = false;
    this.loginService.disconnect();
    this.router.navigate(["/"]);
  }

}
