
export class User {

  public id : number = null;
  public lastName : String = "";
  public firstName : String = "";
  public alias : String = "";
  public email : String = "";
  public password : String = "";

  constructor(firstName: string, lastName : String, alias : String, email : String, password: String) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.alias = alias;
    this.email = email;
    this.password = password;
  }

  public static formatFromBack(fetchedUser : any) {
    console.log(fetchedUser);

    let user = new User(fetchedUser.firstName, fetchedUser.lastName, fetchedUser.alias, fetchedUser.email, fetchedUser.password);
    user.id = fetchedUser.id;

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
