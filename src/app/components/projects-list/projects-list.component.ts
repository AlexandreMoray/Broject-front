import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";
import {User} from "../../models/User";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects : Array<Project> = [];

  constructor() {
  }

  ngOnInit() {
    let user = new User("Mike");
    this.projects.push(new Project("Premier Projet", user));
    this.projects.push(new Project("Deuxième Test", user));
    this.projects.push(new Project("Stop it", user));
  }

}
