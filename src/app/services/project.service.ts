import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../models/Project";
import {User} from "../models/User";
import {Note} from "../models/Note";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private back = environment.back;

  constructor(private http : HttpClient) {
  }

  get(id: number) {

    return this.http.get(this.back + '/projects/'+ id);
  }

  getAll() {

    return this.http.get(this.back + '/projects');
  }

  post() {

  }

  put(id: number) {

  }

  delete(id: number) {

  }
}
