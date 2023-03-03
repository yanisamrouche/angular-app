// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form.component'
import { TodoListComponent } from './todo-list.component';

import { HttpClientModule } from "@angular/common/http";
import { TasksService } from './api/tasks.service';
import { TodoListPageComponent } from './pages/todo-list-page.component';
import { TodoDetailsPageComponent } from './pages/todo-details-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // La page d'accueil affichera la liste des tâches
  { path: '', component: TodoListPageComponent },
  // Ici on utilise une URL paramétrée
  { path: ':id/details', component: TodoDetailsPageComponent }
]

@NgModule({
  declarations: [
    AppComponent, TodoListComponent,
    TaskFormComponent, TodoListPageComponent,
    TodoDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    // En important le ReactiveFormsModule, on importe des
    // composants, directives et services qu'il met à notre 
    // disposition !
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }