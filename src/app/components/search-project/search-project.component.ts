import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";
import {Router} from "@angular/router";
import {Snackbars} from "../../addons/snackbars";
import {ProjectService} from "../../services/project.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-search-project',
  templateUrl: '../projects-list/projects-list.component.html',
  styleUrls: ['../projects-list/projects-list.component.scss']
})
export class SearchProjectComponent implements OnInit {

  public projects: Array<Project> = [];

  constructor(private router : Router,
              private projectService : ProjectService,
              private matSnackBar : MatSnackBar) {
  }

  ngOnInit() {
    let search = this.router.url.substring(7);

    this.projectService.getByName(search).subscribe(
      (projects : any) => {
        if(projects.length == 0) {
          Snackbars.openSnackBar(this.matSnackBar, "No project matched this name", "OK");
          this.router.navigate(['/']);
        } else {
          projects.forEach(
            proj => {
              if (proj.id) {
                this.projects.push(Project.formatFromBack(proj));
              }
            }
          );
        }
      }
    )
  }

}
