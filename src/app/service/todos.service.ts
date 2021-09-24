import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todos } from './../model/Todos'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todos[];

  constructor() { 
    this.todos = [
      {
        id: '1',
        title: 'LEARN PRGM',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '2',
        title: 'LEARN Angular',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '3',
        title: 'LEARN React',
        isCompleted: false,
        date: new Date(),
      },
    ]
  }


  getTask = () =>{
    return of(this.todos);
  }
  addTask = (task: Todos) =>{
    this.todos.push(task);
  }
  changeState = (task: Todos) =>{
    this.todos.map( currentTask =>{
      if(currentTask.id === task.id){
        task.isCompleted = !task.isCompleted;
      }
    } );
  }

  deleteTask = (task : Todos) =>{
    const indexOfTask = this.todos.findIndex(
      (current) => current.id === task.id
    );
    this.todos.splice(indexOfTask, 1);
  }
}
