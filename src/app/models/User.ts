
export class User {

  public id : number = null;
  public name : String = "";
  public alias : String = "";
  public email : String = "";
  public password : String = "";

  constructor(name: string) {
    this.name = name;
  }
}
