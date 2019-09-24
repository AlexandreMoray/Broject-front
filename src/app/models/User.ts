
export class User {

  public id : number = null;
  public lastName : String = "";
  public firstName : String = "";
  public alias : String = "";
  public email : String = "";
  public password : String = "";

  constructor(name: string) {
    this.firstName = name;
  }

  public static formatFromBack(fetchedUser : any) {
    let user = new User(fetchedUser.lastName + " " + fetchedUser.firstName);
    user.id = fetchedUser.id;
    user.alias = fetchedUser.alias;
    user.email = fetchedUser.email;
    user.password = fetchedUser.password;

    return user;
  }

  public formatFromFront() {
    return {
      lastName : this.lastName,
      firstName : this.firstName,
      alias : this.alias,
      email : this.email,
      password : this.password
    }
  }
}
