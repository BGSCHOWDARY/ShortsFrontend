import { Component } from '@angular/core';


import { ShortsListComponent } from './components/shorts-list.component/shorts-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ShortsListComponent, HttpClientModule]
})
export class App {
  title = 'Shorts Media App';
}
