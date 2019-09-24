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

  private url = environment.back + "/projects";

  constructor(private http : HttpClient) {
  }

  get(id: number) {

    return this.http.get(this.url + "/" + id);
  }

  getAll() {
    return this.http.get(this.url);
  }

  getByName(name : String) {
    return this.http.get(this.url + "/name/" + name);
  }

  post(project : any) {
    return this.http.post(this.url, project);
  }

  put(id: number, project : Project) {

    return this.http.post(this.url + "/" + id, project).subscribe();
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id);
  }

}
