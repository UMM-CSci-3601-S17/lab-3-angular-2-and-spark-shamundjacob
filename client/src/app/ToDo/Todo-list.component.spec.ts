import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { ToDo } from "./ToDo";
import { TodoListComponent } from "./todo-list.component";
import { ToDoListService } from "./todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";
import {FilterBy} from "./filter.pipe";

describe("Todo list", () => {

    let todoList: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    let todoListServiceStub: {
        getTodos: () => Observable<ToDo[]>
    };

    beforeEach(() => {
        // stub todoService for test purposes
        todoListServiceStub = {
            getTodos: () => Observable.of([
                {
                    _id: "58895985a22c04e761776d54",
                    owner: "Blanche",
                    status: false,
                    body: "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
                    category: "software design"
                },
                {
                    _id: "588959856f0b82ee93cd93eb",
                    owner: "Barry",
                    status: true,
                    body: "Nisi sit non non sunt veniam pariatur. Elit reprehenderit aliqua consectetur est dolor officia et adipisicing elit officia nisi elit enim nisi.",
                    category: "video games"
                },
                {
                    _id: "58895985ae3b752b124e7663",
                    owner: "Fry",
                    status: true,
                    body: "Ullamco irure laborum magna dolor non. Anim occaecat adipisicing cillum eu magna in.",
                    category: "homework"
                },
                {
                    _id: "5889598528c4748a0292e014",
                    owner: "Workman",
                    status: true,
                    body: "Eiusmod commodo officia amet aliquip est ipsum nostrud duis sunt voluptate mollit excepteur. Sunt non in pariatur et culpa est sunt.",
                    category: "software design"
                },
                ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoListComponent ],
            // providers:    [ todoListService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers:    [ { provide: ToDoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoListComponent);
            todoList = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it("contains all the todos", () => {
        expect(todoList.todos.length).toBe(4);
    });

    it("contains a todo named 'Blanche'", () => {
        expect(todoList.todos.some((todo: ToDo) => todo.owner === "Blanche" )).toBe(true);
    });

    it("contain a todo named 'Fry'", () => {
        expect(todoList.todos.some((todo: ToDo) => todo._id === "58895985ae3b752b124e7663" )).toBe(true);
    });

    it("has 2 todos that have the category software design", () => {
        expect(todoList.todos.some((todo: ToDo) => todo.category === "software design" )).toBe(true);
    });

    it("has two todos that contain officia", () => {
        expect(todoList.todos.filter((todo: ToDo) => todo.body === "officia").length).toBe(2);
    });

});