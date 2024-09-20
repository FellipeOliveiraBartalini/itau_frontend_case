import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() formControl: FormControl;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() type: 'text' | 'number' | 'checkbox' = 'text';
    @Input() value: string | number | boolean | null;
    @Input() name: string;
    @Input() disabled: boolean = false;

    constructor() {}

    ngOnInit() {}
}
