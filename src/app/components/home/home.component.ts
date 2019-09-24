import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/Project";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Snackbars} from "../../addons/snackbars";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private projectField : String = "";

  constructor(
    private router : Router,
    private projectService : ProjectService,
    private matSnackBar : MatSnackBar
  ) { }

  ngOnInit() {
  }

  projectSearch() {
    if(this.projectField.length > 0) {
      this.router.navigate(['/search/' + this.projectField]);
    }
  }

}
