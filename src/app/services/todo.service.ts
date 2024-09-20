import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../enviroments';
import { TodoDto } from '../model/todo.dto';
import { Todo } from '../model/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private apiUrl: string = enviroments.apiUrl;

    constructor(private http: HttpClient) {}

    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
    }

    getById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.apiUrl}/todos/${id}`);
    }

    create(todo: TodoDto): Observable<Todo> {
        return this.http.post<Todo>(`${this.apiUrl}/todos`, todo);
    }

    update(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.apiUrl}/todos/${todo.id}`, todo);
    }

    delete(todoId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/todos/${todoId}`);
    }
}
