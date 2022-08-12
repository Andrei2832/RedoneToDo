import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreatingFirstTaskComponent} from "./components/creating-first-task/creating-first-task.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {ModalComponent} from "./components/modal/modal.component";
import {AddTaskComponent} from "./components/add-task/add-task.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AddColumnComponent} from "./components/add-column/add-column.component";
import {DetailTaskComponent} from "./components/detail-task/detail-task.component";
import {MessageComponent} from "./components/message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    CreatingFirstTaskComponent,
    TaskListComponent,
    ModalComponent,
    AddTaskComponent,
    AddColumnComponent,
    DetailTaskComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AddTaskComponent,
    AddColumnComponent,
    DetailTaskComponent,
    TaskListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
