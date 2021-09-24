import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HeaderComponent } from './layout/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
