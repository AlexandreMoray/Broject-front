import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../models/User";
import {NgForm} from '@angular/forms';
import {MatButton, MatSnackBar} from '@angular/material';
import {Project} from '../../models/Project';
import {Note} from '../../models/Note';
import {LoginService} from '../../services/login.service';
import {ProjectService} from '../../services/project.service';
import {UserService} from '../../services/user.service';
import {Snackbars} from '../../addons/snackbars';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewProjectComponent implements OnInit {

  public actualTabIndex :number = 0;
  public members :Array<User> = [];
  public newContributor: String = '';

  public projectToAdd = {
    name: '',
    description:'',
    progress: 0,
    category: '',
    startingDate: new Date(),
    endingDate: new Date(),
    visibility: 0,
    owner: 0,
    members: this.members,
    feed: []
    };

  constructor(private projectService : ProjectService, private userService: UserService, private loginService : LoginService, private matSnackBar : MatSnackBar) { }

  ngOnInit() {
    this.members.push(new User('Thierry'));
    this.members.push(new User('John'));
  }

  // Switch tabs [0,1,2]
  goNext(index: number) {
    this.actualTabIndex = index;
  }

  addProject() {

  }

  // To display the progress bar value.
  formatLabel(value: number | null) {
    if (!value) {
      return 0 + '%';
    }
    else if (value >= 0 && value < 100) {
      return Math.round(value) + '%';
    }
    else {
      return value;
    }
  }

  onSubmit() {
    /*console.log("ONSUBMIT : ");
    console.log(this.loginService.getActualUser(),
      this.projectToAdd.name.toString(),
      this.projectToAdd.progress.toString(),
      this.projectToAdd.startingDate.toString(),
      this.projectToAdd.endingDate.toString(),
      this.projectToAdd.members.toString(),
      this.projectToAdd.feed.toString(),
      this.projectToAdd.description.toString(),
      this.projectToAdd.category.toString());*/

    let newProject = new Project(
      this.projectToAdd.name,
      this.loginService.getActualUser(),
      this.projectToAdd.progress,
      this.projectToAdd.startingDate,
      this.projectToAdd.endingDate,
      this.projectToAdd.members,
      this.projectToAdd.feed,
      this.projectToAdd.description,
      this.projectToAdd.category
      );
    console.log(newProject);
    this.projectService.post(newProject);
  }

  addToMemberList(){
    console.log("addMemberToList : ");
    this.userService.getByAlias(this.newContributor).subscribe(
      (user : User) => {
        this.members.push(user);
      }, (err) => {
        Snackbars.openSnackBar(this.matSnackBar, "Sorry, we can't find this user ...", "OK");
      }
    );
  }

}
