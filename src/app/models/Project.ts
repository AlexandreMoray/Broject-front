import {User} from "./User";
import {Note} from "./Note";

export class Project {
  /*
  id key
   */
  public id : number = null;

  /*
  Name of the project
   */
  public name : String = "";

  /*
  Progress on 100
   */
  public progress : number = 0;

  /*
  Starting date
   */
  public startingDate : Date = new Date();

  /*
  Ending date (if any)
   */
  public endingDate : Date = null;

  /*
  Boolean : true = active, false = archived
   */
  public active : boolean = true;

  /*
  Owner of the project
   */
  public owner : User = null;

  /*
  List of members owning the project
   */
  public members : Array<User> = [];

  /*
  Comments on the project
   */
  public feed : Array<Note> = [];

  constructor(name : String,
              creator : User) {
    this.name = name;
    this.owner = creator;
  }

}
