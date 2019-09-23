import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "../models/Project";
import {Note} from "../models/Note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = environment.back + "/notes";

  constructor(private http : HttpClient) {
  }

  get(id: number) {

    return this.http.get(this.url + "/" + id);
  }

  getAllFromProject(id: number) {

    return this.http.get(this.url + "/projectId/" + id);
  }

  post(note : any) {

    return this.http.post(this.url, note);
  }

  put(id: number, note : any) {

    return this.http.post(this.url + "/" + id, note).subscribe();
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}
