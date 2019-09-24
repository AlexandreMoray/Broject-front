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

  constructor(name: String,
              owner: User,
              progress: number,
              startingDate: Date,
              endingDate: Date,
              description: String,
              category: String,
              visibility: number,
              feed: Array<Note>,
              members: Array<User>,
              ) {
    this.name = name;
    this.owner = owner;
    this.progress = progress;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.description = description;
    this.category = category;
    this.visibility = visibility == 0;
    this.feed = feed;
    this.members = members;
  }


  public static formatFromBack(fetchedProject : any) {
    let project : Project = new Project(
      fetchedProject.name,
      User.formatFromBack(fetchedProject.owner),
      fetchedProject.progression,
      new Date(fetchedProject.startingDate),
      new Date(fetchedProject.endingDate),
      fetchedProject.description,
      fetchedProject.category ? fetchedProject.category : null,
      fetchedProject.visibility,
      new Array<Note>(),
      new Array<User>()
    );

    project.id = fetchedProject.id;

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
      owner: {
        id : this.owner.id
      },
      feed: this.feed ? this.feed: [],
      members: this.members ? this.members: []
    }
  }



}
