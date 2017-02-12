import{Injectable} from '@angular/core';
import{ Http } from '@angular/http';
import{ ToDo } from './ToDo';
import{Observable} from "rxjs";

@Injectable()
export class ToDoListService {
    private baseUrl: string = API_URL;
    constructor(private http: Http) { }

    getTodos(): Observable<ToDo[]> {
        let body = this.http.request(this.baseUrl + 'todos').map(res => res.json());
        return body;
    }
}
