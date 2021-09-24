import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/model/Todos';
import { TodosService } from 'src/app/service/todos.service';
import {v4} from "uuid";


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  taskTitle: string = '';
  constructor(private todoservice: TodosService) { }

  ngOnInit(): void {
  }

  addTask(){
    const newTask: Todos = {
      id: v4(),
      title: this.taskTitle,
      date: new Date(),
      isCompleted: false,
    }
    this.todoservice.addTask(newTask);
    this.taskTitle = '';
  }

}
