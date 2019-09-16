import {User} from "./User";

export class Note {
  public id : number = null;
  public title : String = "";
  public date : Date = new Date();
  public owner : User = null;
  public priority : number = 0;
  public comment : String = "";

  constructor(creator: User,
              title : String) {
    this.title = title;
    this.owner = creator;
    this.comment = "Bla bla bla y'a les cookies dans le sac !";
  }
}
