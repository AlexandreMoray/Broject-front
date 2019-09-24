import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import {User} from '../../models/User';
import {Note} from '../../models/Note';
import {ProjectService} from "../../services/project.service";
import {UserService} from "../../services/user.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects: Array<Project> = [];
  public progress: 35;

  constructor(private projectService : ProjectService,
              private userService: UserService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.userService.getProjects(this.loginService.getActualUser().id).subscribe(
      (fetchedProjects : Array<Project>) => {
        console.log(fetchedProjects);

        fetchedProjects.forEach(
          proj => {
            this.projects.push(Project.formatFromBack(proj));
          }
        )

        console.log(this.projects);
      }
    );
  }

  onProgressClicked() {
    this.projects[0].progress = 80;
  }
}
