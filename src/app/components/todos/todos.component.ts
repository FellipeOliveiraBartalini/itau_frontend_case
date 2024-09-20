import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from '../../model/todo.model';
import { TodoService } from '../../services/todo.service';
import { TodoFormComponent } from '../forms/todo/form-todo.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { formatStringDateToString } from '../../utils/dateFormatter';

@Component({
    selector: 'app-todos',
    standalone: true,
    imports: [CommonModule, TodoFormComponent, SidebarComponent],
    templateUrl: './todos.component.html',
})
export class TodosComponent {
    formatStringDateToString = formatStringDateToString;

    @Input() todoFormGroup: FormGroup;
    @Input() selectedTodoId: number;
    @Output() onSetSelectedTodoId = new EventEmitter();

    setSelectedTodoId(id: number): void {
        this.onSetSelectedTodoId.emit(id);
    }

    todos: Todo[] = [];

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.getAllTodos();
    }

    getAllTodos(): void {
        this.todoService.getAll().subscribe((todos) => (this.todos = todos));
    }

    onCreateTodo(todo: Todo) {
        this.todoService.create(todo).subscribe((newTodo) => {
            this.todos.push(newTodo);
        });
    }

    onDeleteTodo(todoId: number) {
        this.todoService.delete(todoId).subscribe(() => {
            this.todos = this.todos.filter((todo) => todo.id !== todoId);
        });
    }

    onEditTodo(todo: Todo) {
        this.todoService.update(todo).subscribe((updatedTodo) => {
            this.todos = this.todos.map((t) =>
                t.id === updatedTodo.id ? updatedTodo : t,
            );
        });
    }

    onToggleTodoCompleted(todo: Todo) {
        todo.completedAt = todo.completedAt ? null : new Date().toISOString();
        this.todoService.update(todo).subscribe((updatedTodo) => {
            this.todos = this.todos.map((t) =>
                t.id === updatedTodo.id ? updatedTodo : t,
            );
        });
    }

    onSelectTodo(todoId: number): void {
        this.setSelectedTodoId(todoId);
    }
}
