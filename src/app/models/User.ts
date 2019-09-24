
export class User {

  public id : number = null;
  public lastName : String = "";
  public firstName : String = "";
  public alias : String = "";
  public email : String = "";
  public password : String = "";

  constructor(firstName: string, lastName? : String, alias? : String, email? : String, password? : String) {
    this.firstName = this.firstName ? this.firstName : name;
    this.lastName = this.lastName ? this.lastName : name;
    this.alias = this.alias ? this.alias : name;
    this.email = this.email ? this.email : name;
    this.password = this.password ? this.password : name;
  }

  public static formatFromBack(fetchedUser : any) {
    let user = new User(fetchedUser.firstName);
    user.lastName = fetchedUser.lastName;
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
