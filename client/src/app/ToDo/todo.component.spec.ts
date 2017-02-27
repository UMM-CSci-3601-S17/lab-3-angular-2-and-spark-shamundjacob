
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { ToDo } from "./ToDo";
import { TodoComponent } from "./todo.component";
import { ToDoListService } from "./todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo component", () => {

    let todoComponent: TodoComponent;
    let fixture: ComponentFixture<TodoComponent>;

    let todoListServiceStub: {
        getTodoById: (todoId: string) => Observable<ToDo>
    };

    beforeEach(() => {
        // stub UserService for test purposes
        todoListServiceStub = {

            getTodoById : (todoId: string) => Observable.of([
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
                    body: "Nisi sit non non sunt veniam pariatur. Elit reprprivate todoListService: ToDoListServiceehenderit aliqua consectetur est dolor officia et adipisicing elit officia nisi elit enim nisi.",
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

            ].find(todo => todo._id === todoId))
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoComponent ],
            providers:    [ { provide: ToDoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoComponent);
            todoComponent = fixture.componentInstance;
        });
    }));

    it("can retrieve Fry by Id", () => {
        todoComponent.setId("58895985ae3b752b124e7663");
        expect(todoComponent.todo).toBeDefined();
        expect(todoComponent.todo.owner).toBe("Fry");
        expect(todoComponent.todo.category).toBe("homework");
    });

    it("returns undefined for Tom", () => {
        todoComponent.setId("Tom");
        expect(todoComponent.todo).not.toBeDefined();
    });

});