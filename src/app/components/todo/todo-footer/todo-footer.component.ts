import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFiltroAction } from '../../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../../../models/todo.model';
import { BorrarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos){
    const accion = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes (todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiar() {
    const accion = new BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
