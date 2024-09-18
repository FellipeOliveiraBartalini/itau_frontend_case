import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
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
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'itau_frontend_case';
}
