// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TodoListComponent} from "./ToDo/todo-list.component";
import {UserListComponent} from "./users/user-list.component";

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'users', component: UserListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);