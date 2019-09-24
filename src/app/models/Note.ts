import {User} from "./User";

export class Note {
  public id : number;
  public title : String;
  public date : Date;
  public creator : User;
  public priority : number;
  public message : String;

  constructor(creator: User, title: String, priority : number, message : String) {
    this.title = title;
    this.date = new Date();
    this.creator = creator;
    this.priority = priority;
    this.message = message;
  }

  public formatFromFront(projectId : number) {

    const formatedNote = {
      title : this.title,
      date : this.date,
      creator : this.creator,
      priority : this.priority,
      message : this.message,
      noteProject : {
        id : projectId
      }
    };

    console.log("->" + formatedNote);
    return formatedNote;
  }

  public static formatFromBack(fetchedNote : any) {
    let note = new Note(fetchedNote.creator, fetchedNote.title, fetchedNote.priority, fetchedNote.message);
    note.id = fetchedNote.id;
    note.date = fetchedNote.date ? fetchedNote.date : new Date();
    return note;
  }
}
