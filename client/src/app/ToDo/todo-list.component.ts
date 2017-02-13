import { Component } from '@angular/core';
import { ToDoListService } from "./todo-list.service";
import { FormsModule } from '@angular/forms';
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'todo-list-component',
    providers: [ToDoListService],
    templateUrl: 'Todo-List.component.html',
})

export class TodoListComponent {
    private todos: any;

    constructor(private _todoListService: ToDoListService) {
        this.todos = _todoListService.getTodos();
    }
}