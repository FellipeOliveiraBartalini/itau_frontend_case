import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../Todo';
import { enviroments } from '../../enviroments';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private apiUrl: string = enviroments.apiUrl;

    constructor(private http: HttpClient) {}

    getTodo(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
    }
}
