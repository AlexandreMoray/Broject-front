import {User} from "./User";

export class Note {
  public id : number = null;
  public title : String = "";
  public date : Date = new Date();
  public owner : User = null;
  public priority : number = 0;
  public message : String = "";

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
      owner : this.owner,
      priority : this.priority,
      message : this.message,
      projectId : projectId
    };

    console.log(formatedNote);
    return formatedNote;
  }
}
