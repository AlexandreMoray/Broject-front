import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import {User} from '../../models/User';
import {Note} from '../../models/Note';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects: Array<Project> = [];
  public users: Array<User> = [];
  public notes: Array<Note> = [];
  public progress: 35;

  constructor() {
  }

  ngOnInit() {
    const user1 = new User('Mike');
    const user2 = new User('Max');
    this.users.push(user1, user2);
    const note1 = new Note(user1, 'message number 1');
    const note2 = new Note(user2, 'message 2');
    this.notes.push(note1, note2);
    const date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);
    const date2: Date = new Date(2018, 0O6, 0O5, 17, 23, 42, 11);
    this.projects.push(new Project('Projet DevOps', 35, date , date2, false, user1, this.users, this.notes));
    this.projects.push(new Project('Khalass des gros culs', 60, date, date2, false, user2, this.users, this.notes));
    this.projects.push(new Project('Devenir le meilleur dresseur', 90, date, date2, false, user1, this.users, this.notes));
    console.log(this.projects);
  }

  onProgressClicked() {
    this.projects[0].progress = 80;
  }
}
