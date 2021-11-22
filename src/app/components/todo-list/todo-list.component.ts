import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  public page = 1;
  public todos: Todo[];

  constructor(private todosService: TodoService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }

  selectPage(page: number): void {
    this.page = page;
  }

}
