import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() text: string = '';
    @Input() color: string = '';
    @Output() onBtnClick = new EventEmitter();

    onClick(): void {
        this.onBtnClick.emit();
    }
}
