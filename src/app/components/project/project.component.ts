import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {ProjectService} from "../../services/project.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {NoteService} from "../../services/note.service";
import {Note} from "../../models/Note";
import {User} from "../../models/User";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public note;
  public selectedProject : Project;
  public noteForm = {
    title : "",
    message : "",
    priority : "2"
  };

  constructor(private router : Router,
              private projectService : ProjectService,
              private noteService : NoteService,
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

  addNote() {
    let user = new User("momo");
    user.id = 1;
    let newNote = new Note(user, this.noteForm.title, Number(this.noteForm.priority), this.noteForm.message);
    this.noteService.post(newNote.formatFromFront(this.selectedProject.id)).subscribe( (r) => { console.log(r)});
  }

}
