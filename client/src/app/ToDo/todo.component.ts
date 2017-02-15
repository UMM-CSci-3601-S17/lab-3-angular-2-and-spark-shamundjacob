

import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from "./todo-list.component";
import { ToDo } from "./ToDo";
import {ToDoListService} from "./todo-list.service";

@Component({
    selector: 'user-component',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    public user: ToDo = null;
    private id: string;

    constructor(private userListService: ToDoListService) {
        // this.users = this.userListService.getUsers();
    }

    private subscribeToServiceForId() {
        if (this.id) {
            this.userListService.getTodoById(this.id).subscribe(
                user => this.user = user,
                err => {
                    console.log(err);
                }
            );
        }
    }

    setId(id: string) {
        this.id = id;
        this.subscribeToServiceForId();
    }

    ngOnInit(): void {
        this.subscribeToServiceForId();
    }
}