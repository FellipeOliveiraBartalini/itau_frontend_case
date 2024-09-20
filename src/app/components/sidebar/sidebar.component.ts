import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
    todo: Todo;
}
