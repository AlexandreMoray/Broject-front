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
  public name: String;
  /*
  Progress on 100
   */
  public progress : number;
  /*
  Starting date
   */
  public startingDate: Date;
  /*
  Ending date (if any)
   */
  public endingDate: Date;
  /*
  Boolean : true = active, false = archived
   */
  public active : boolean;
  /*
  Boolean : true = public, false = private
   */
  public visibility : boolean;
  /*
  Description explaining the project
   */
  public description : String;
  /*
  Owner of the project
   */
  public owner: User = null;
  /*
  List of members owning the project
   */
  public members: Array<User>;
  /*
  Comments on the project
   */
  public feed: Array<Note>;

  constructor(name: String, owner: User, progress?: number, startingDate?: Date, endingDate?: Date, active?: boolean, members?: Array<User>, feed?: Array<Note>) {
    this.name = name;
    this.progress = progress;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.active = active;
    this.owner = owner;
    this.members = members;
    this.feed = feed;
  }

  public static formatFromBack(fetchedProject : any) {
    let project : Project = new Project(fetchedProject.name, fetchedProject.owner);
    project.id = fetchedProject.id;
    project.startingDate = new Date(fetchedProject.startingDate)
    project.endingDate = new Date(fetchedProject.endingDate)
    project.active = fetchedProject.active ? true : false;
    project.progress = fetchedProject.progression;
    project.visibility = fetchedProject.visibility == 1 ? true : false;
    project.description = fetchedProject.description;
    project.feed = new Array<Note>();
    project.members = new Array<User>();
    return project;
  }



}
