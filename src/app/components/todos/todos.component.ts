import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todos',
    standalone: true,
    imports: [CommonModule, TodoItemComponent],
    templateUrl: './todos.component.html',
})
export class TodosComponent {
    todos: Todo[] = [];

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todoService.getTodo().subscribe((todos) => (this.todos = todos));
    }
}
