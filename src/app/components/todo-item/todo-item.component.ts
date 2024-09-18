import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { faTimes, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [],
    templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
    @Input() todo: Todo;
    faTimes = faTimes;
    faPencil = faPencil;

    onDeleteTodo(todoId: number) {
        console.log('delete >', todoId);
    }
    onEditTodo(todo: Todo) {
        console.log('edit >', todo);
    }
}
