import {MatSnackBar} from "@angular/material/snack-bar";

export class Snackbars {

  public static openSnackBar(snackBar: MatSnackBar, message: string, action: string) {
    snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
