import { Component, OnInit } from '@angular/core';
import { ToDo } from "./ToDo";
import {ToDoListService} from "./todo-list.service";

@Component({
    selector: 'todo-component',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
    public todo: ToDo = null;
    private _id: string;

    constructor(private todoListService: ToDoListService) {
        // this.users = this.userListService.getUsers();
    }

    private subscribeToServiceForId() {
        if (this._id) {
            this.todoListService.getTodoById(this._id).subscribe(
                todo => this.todo = todo,
                err => {
                    console.log(err);
                }
            );
        }
    }

    setId(id: string) {
        this._id = id;
        this.subscribeToServiceForId();
    }

    ngOnInit(): void {
        this.subscribeToServiceForId();
    }
}