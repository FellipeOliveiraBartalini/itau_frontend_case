import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../input/input.component';
import { TodoDto } from '../../../model/todo.dto';

@Component({
    selector: 'app-form-todo',
    standalone: true,
    imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
    templateUrl: './form-todo.component.html',
})
export class TodoFormComponent {
    @Input() label: string;
    @Input() selectedTodoId: number;
    @Input() todoFormGroup: FormGroup;
    // TODO: after submiting get all todos in the main list
    // @Output() onGetAll = new EventEmitter();

    constructor(private todoService: TodoService) {}

    onSubmit(): void {
        console.log('Todo: ', this.todoFormGroup.value);
        const todoDto: TodoDto = this.todoFormGroup.value;
        todoDto.createdAt = new Date().toISOString();
        this.todoService.create(todoDto).subscribe((newTodo) => {
            // this.onGetAll.emit();
        });
    }
}
