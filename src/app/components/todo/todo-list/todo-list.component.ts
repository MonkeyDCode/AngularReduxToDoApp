import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  todos: Todo[] = [];
  filtro: string;
  ngOnInit() {

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    })
  }

}
