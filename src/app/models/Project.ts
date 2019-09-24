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
  public name: String = '';
  /*
  Description of the project
  */
  public description: String ='';
  /*
  Category of the project
  */
  public category: String ='';
  /*
  Progress on 100
   */
  public progress = 0;
  /*
  Starting date
   */
  public startingDate: Date;
  /*
  Ending date (if any)
   */
  public endingDate: Date;
  /*
  Boolean : true = public, false = private
   */
  public visibility = false;
  /*
  Active (archived or not)
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

  constructor(name: String, owner: User, progress?: number, startingDate?: Date, endingDate?: Date, members?: Array<User>, feed?: Array<Note>, description?: String, category?: String) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.progress = progress;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.owner = owner;
    this.members = members;
    this.feed = feed;
  }


  public static formatFromBack(fetchedProject : any) {
    let project : Project = new Project(fetchedProject.name, fetchedProject.owner);
    project.id = fetchedProject.id;
    project.startingDate = fetchedProject.startingDate;
    project.endingDate = fetchedProject.endingDate;
    project.progress = fetchedProject.progression;
    project.visibility = fetchedProject.visibility == 1 ? true : false;
    project.owner = User.formatFromBack(fetchedProject.owner);
    project.feed = new Array<Note>();
    project.members = new Array<User>();
    return project;
  }

  public formatFromFront() {
    return {
      id: this.id ? this.id : null,
      name: this.name,
      progression: this.progress,
      startingDate: this.startingDate,
      endingDate: this.endingDate,
      active: this.active,
      pictureId: null,
      visibility: this.visibility ? 1:0,
      description: this.description,
      owner: this.owner.id,
      feed: this.feed ? this.feed: null,
      members: this.members ? this.members: null
    }
  }



}
