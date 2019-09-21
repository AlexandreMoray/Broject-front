import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";
import {User} from "../../models/User";
import {Note} from "../../models/Note";
import {ProjectService} from "../../services/project.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public selectedProject : Project;

  constructor(private router : Router,
              private projectService : ProjectService,
              private userService : UserService) { }

  ngOnInit() {
    this.loadProjectInfos();
  }

  loadProjectInfos() {

    let id = Number(this.router.url.substring(9));
    this.projectService.get(id).subscribe(
      fetchedProject => {
        this.selectedProject = Project.formatFromBack(fetchedProject);
      }
    );
  }

}
