import{Injectable} from '@angular/core';
import{ Http } from '@angular/http';
import{ ToDo } from './ToDo';
import{Observable} from "rxjs";

@Injectable()
export class ToDoListService {
    private baseUrl: string = API_URL +"todos";
    constructor(private http: Http) { }

    getTodos(): Observable<ToDo[]> {
        return this.http.request(this.baseUrl).map(res => res.json())
    }

    getTodoById(_id: string): Observable<ToDo> {
        return this.http.request(this.baseUrl + "/" + _id).map(res => res.json());
    }
}
