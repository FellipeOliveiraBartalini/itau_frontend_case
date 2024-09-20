import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from '../../model/todo.model';
import { TodoService } from '../../services/todo.service';
import { ButtonComponent } from '../button/button.component';
import { formatStringDateToString } from '../../utils/dateFormatter';

@Component({
    selector: 'app-todo-detail',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent implements OnChanges {
    todo: Todo | null;
    formatStringDateToString = formatStringDateToString;

    @Input() selectedTodoId: number;
    @Input() todoFormGroup: FormGroup;
    @Output() onSetTodoFormGroup = new EventEmitter();

    constructor(private todoService: TodoService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.selectedTodoId) {
            return;
        }

        this.todoService
            .getById(this.selectedTodoId)
            .pipe()
            .subscribe((todo) => {
                this.todo = todo;
                // this.onSetTodoFormGroup.emit(todo);
            });
    }

    onEdit(): void {
        console.log('edit >', this.todo);
    }

    onDelete(): void {
        if (!this.todo) return;
        console.log('delete >', this.todo.id);
    }
}
