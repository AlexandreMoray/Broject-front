import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {ProjectService} from "../../services/project.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {NoteService} from "../../services/note.service";
import {Note} from "../../models/Note";
import {User} from "../../models/User";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public selectedProject : Project;
  public actualUser : User;
  public noteForm = {
    title : "",
    message : "",
    priority : "2"
  };

  constructor(private router : Router,
              private projectService : ProjectService,
              private noteService : NoteService,
              private userService : UserService,
              private loginService : LoginService) { }

  ngOnInit() {
    this.actualUser = this.loginService.getActualUser();
    this.loadProjectInfos();
  }

  loadProjectInfos() {
    let id = Number(this.router.url.substring(9));

    this.projectService.get(id).subscribe(
      fetchedProject => {
        this.selectedProject = Project.formatFromBack(fetchedProject);
        this.selectedProject.feed = new Array<Note>();
        this.noteService.getAllFromProject(this.selectedProject.id).subscribe(
          (fetchedNotes : Array<Note>) => {
            fetchedNotes.forEach(
              (note:any) => {
                if(!note.creator.id) {
                  this.noteService.get(note.id).subscribe(
                    fetchedNote => {
                      this.selectedProject.feed.push(Note.formatFromBack(fetchedNote));
                    }
                  )
                } else {
                  this.selectedProject.feed.push(Note.formatFromBack(note));
                }
            });

          }
        )
      }
    );
  }

  addNote() {

    let newNote = new Note(this.actualUser, this.noteForm.title, Number(this.noteForm.priority), this.noteForm.message);

    this.noteService.post(newNote.formatFromFront(this.selectedProject.id)).subscribe(
      (note : any) => {
        this.selectedProject.feed.push(Note.formatFromBack(note));
      }
    );
  }

  translatePriority(priority : number) {
    switch (priority) {
      case 1: return("Major");
      case 2: return("Important");
      case 3: return("Basic");
      case 4: return("Minor");
      default: return("None");
    }
  }

}
