import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>

    <router-outlet />
  `,
  styles: ``
})
export class AppComponent {
  title = 'jobbook';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/getjobs').subscribe((data) => {
      console.log(data);
    });
  }
}
