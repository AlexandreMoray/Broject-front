import {User} from './User';
import {Note} from './Note';

export class Project {
  /*
  id key
   */
  public id: number = null;
  /*
  Name of the project
   */
  // tslint:disable-next-line:ban-types
  public name: String = '';
  /*
  Progress on 100
   */
  public progress = 0;
  /*
  Starting date
   */
  public startingDate: Date = new Date();
  /*
  Ending date (if any)
   */
  public endingDate: Date = null;
  /*
  Boolean : true = active, false = archived
   */
  public active = true;
  /*
  Owner of the project
   */
  public owner: User = null;
  /*
  List of members owning the project
   */
  public members: Array<User> = [];
  /*
  Comments on the project
   */
  public feed: Array<Note> = [];
  // tslint:disable-next-line:ban-types

  constructor(name: string, owner: User, progress?: number, startingDate?: Date, endingDate?: Date, active?: boolean, members?: Array<User>, feed?: Array<Note>) {
    this.name = name;
    this.progress = progress;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.active = active;
    this.owner = owner;
    this.members = members;
    this.feed = feed;
  }



}
