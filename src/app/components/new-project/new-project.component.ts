import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewProjectComponent implements OnInit {

  public actualTabIndex :number = 0;
  public members :Array<User> = [];

  constructor() { }

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

}
