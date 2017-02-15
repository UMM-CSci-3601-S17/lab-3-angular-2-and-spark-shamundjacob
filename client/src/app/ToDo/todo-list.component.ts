import {Component, OnInit} from '@angular/core';
import { ToDoListService } from "./todo-list.service";
import { FormsModule } from '@angular/forms';
import { FilterBy } from "./filter.pipe";
import {ToDo} from "./ToDo";

@Component({
    selector: 'todo-list-component',
    providers: [ FilterBy ],
    templateUrl: 'Todo-List.component.html',
})

export class TodoListComponent implements OnInit{
    public todos: ToDo[];

    constructor(private todoListService: ToDoListService) {
        //this.todos = _todoListService.getTodos();
    }

    ngOnInit(): void {
        this.todoListService.getTodos().subscribe(
            todos => this.todos = todos,
            err => {
                console.log(err);
            }
        );
    }
}