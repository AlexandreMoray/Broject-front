import {User} from "./User";

export class Note {
  public id : number;
  public title : String;
  public date : Date;
  public owner : User;
  public priority : number;
  public message : String;

  constructor(creator: User, title: String, priority : number, message : String) {
    this.title = title;
    this.date = new Date();
    this.owner = creator;
    this.priority = priority;
    this.message = message;
  }

  formatFromBack(fetchedNote : any) {

    return fetchedNote;
  }

  formatFromFront(projectId : number) {
    const formatedNote = {
      title : this.title,
      date : this.date,
      owner : this.owner.id,
      priority : this.priority,
      message : this.message,
      projectId : projectId
    };

    console.log(formatedNote);
    return formatedNote;
  }
}
