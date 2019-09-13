
export class Project {
  /*
  id key
   */
  protected id = null;

  /*
  Name of the project
   */
  protected name = "";

  /*
  Starting date
   */
  protected startingDate = new Date();

  /*
  Ending date (if any)
   */
  protected endingDate = null;

  /*
  Boolean : true = active, false = archived
   */
  protected active = true;

  /*
  List of members owning the project
   */
  protected members = [];

  constructor(name) {
    this.name = name;
  }

}
