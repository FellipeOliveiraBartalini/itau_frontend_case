import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() type: 'button' | 'submit' = 'button';
    @Input() text: string = '';
    @Input() color: string = '';
    @Input() disabled: boolean = false;
    @Output() onBtnClick = new EventEmitter();

    onClick(): void {
        console.log('emit');
        this.onBtnClick.emit();
    }
}
