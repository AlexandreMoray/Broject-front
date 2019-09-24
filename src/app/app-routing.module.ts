import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {SigninComponent} from "./components/signin/signin.component";
import {ProjectComponent} from "./components/project/project.component";
import {ProjectsListComponent} from "./components/projects-list/projects-list.component";
import {NewProjectComponent} from "./components/new-project/new-project.component";
import {SearchProjectComponent} from "./components/search-project/search-project.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'project/new', component: NewProjectComponent},
  { path: 'project/:id', component: ProjectComponent},
  { path: 'projects', component: ProjectsListComponent},
  { path: 'search/:name', component: SearchProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
