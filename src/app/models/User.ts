
export class User {

  public id : number = null;
  public name : String = "";
  public alias : String = "";
  public email : String = "";
  public password : String = "";

  constructor(name: string) {
    this.name = name;
  }

  public static formatFromBack(fetchedUser : any) {
    let user = new User(fetchedUser.name);
    user.id = fetchedUser.id;
    user.alias = fetchedUser.alias;
    user.email = fetchedUser.email;
    user.password = fetchedUser.password;

    return user;
  }
}
