import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import {User} from '../../models/User';
import {Note} from '../../models/Note';
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects: Array<Project> = [];
  public progress: 35;

  constructor(private projectService : ProjectService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAll().subscribe(
      (fetchedProjects : Array<Project>) => {
        console.log(fetchedProjects);

        fetchedProjects.forEach(
          proj => {
            this.projects.push(Project.formatFromBack(proj));
          }
        )

        console.log(this.projects);
      }
    )
  }

  onProgressClicked() {
    this.projects[0].progress = 80;
  }
}
