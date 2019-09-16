import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project";
import {User} from "../../models/User";
import {Note} from "../../models/Note";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public selectedProject : Project = new Project("Mon Projet", new User("Shawn"));

  constructor() { }

  ngOnInit() {
    let user = new User("John");
    this.selectedProject.progress = 35;
    this.selectedProject.members.push(user);
    this.selectedProject.feed.push(new Note(user, "Bug to be fixed"));
    this.selectedProject.feed.push(new Note(user, "For next week"));
  }

}
