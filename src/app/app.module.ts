import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//FORMS
import {ReactiveFormsModule} from '@angular/forms';
// NGRX
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'; 
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { environment } from '../environments/environment';
import { appReducers } from './app.reducers';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
