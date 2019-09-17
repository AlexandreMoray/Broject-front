import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjectsListComponent} from './components/projects-list/projects-list.component';
import {FormsModule} from '@angular/forms';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NewProjectComponent } from './components/new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    RegisterComponent,
    SigninComponent,
    ProjectsListComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
