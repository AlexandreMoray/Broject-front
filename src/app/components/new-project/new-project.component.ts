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
    members: new Array<User>(),
    feed: []
    };

  constructor(private projectService : ProjectService,
              private userService: UserService,
              private loginService : LoginService,
              private matSnackBar : MatSnackBar) { }

  ngOnInit() {
    this.loadOwnerInMembers();
  }

  private loadOwnerInMembers() {
    this.projectToAdd.members.push( this.loginService.getActualUser() );
  }

  // Switch tabs [0,1,2]
  goNext(index: number) {
    this.actualTabIndex = index;
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
    this.projectService.post(newProject.formatFromFront()).subscribe(
      result => {
        console.log(result);
      }
    );
  }

  addToMemberList(){
    console.log("addMemberToList : ");
    this.userService.getByAlias(this.newContributor).subscribe(
      (user : User) => {
        if(user) {
          this.projectToAdd.members.push(user);
        } else {
          Snackbars.openSnackBar(this.matSnackBar, "Sorry, we can't find this user ...", "OK");
        }
      }
    );
  }

}
