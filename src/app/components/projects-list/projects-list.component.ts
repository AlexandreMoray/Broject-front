import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects = [];

  constructor() {
  }

  ngOnInit() {
    this.projects.push(new Project("Premier Projet"));
    this.projects.push(new Project("Deuxième Test"));
    this.projects.push(new Project("Stop it"));
  }

}
