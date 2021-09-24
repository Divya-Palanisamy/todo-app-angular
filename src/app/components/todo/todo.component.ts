import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todos } from '../../model/Todos'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  trash = faTrashAlt;
  todos: Todos[] = [];
  constructor(private todoservice: TodosService) {
    
   }

  ngOnInit(): void {
    this.todoservice.getTask().subscribe( (tasks) => {
      this.todos = tasks;
    })
  }

  changeTaskStatus(task: Todos){
    this.todoservice.changeState(task);
  }

  deleteTask(task: Todos){
    this.todoservice.deleteTask(task);
  }
}
