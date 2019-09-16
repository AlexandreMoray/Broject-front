import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private projectField : String = "";

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  projectSearch() {

    this.router.navigate(["/projects"]);
  }

}
