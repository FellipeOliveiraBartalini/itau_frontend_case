import { HttpClientModule } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TodoFormComponent } from './components/forms/todo/form-todo.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodosComponent } from './components/todos/todos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HttpClientModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        TodosComponent,
        SidebarComponent,
        TodoDetailComponent,
        TodoFormComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    @Output() selectedTodoId: number;

    @Output() todoFormGroup: FormGroup = new FormGroup({
        title: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
        ]),
        description: new FormControl(''),
        createdAt: new FormControl(''),
        completedAt: new FormControl(''),
    });

    @Output() setSelectedTodoId(id: number): void {
        this.selectedTodoId = id;
    }

    @Output() setTodoFormGroup(newValues: { [key: string]: any }): void {
        this.todoFormGroup.setValue(newValues);
    }

    @Output() label: string = 'Create Todo';

    title = 'itau_frontend_case';
}
