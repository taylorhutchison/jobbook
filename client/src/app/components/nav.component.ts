import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
    <nav>
      <h1>JobBook</h1>
    </nav>
  `,
  styles: `
    nav {
      background-color: #555;
      color: white;
      padding: 10px;
      height: 50px;

      h1 {
        margin: 0;
        padding:0;
        font-size: 24px;

      }

    }
  `
})
export class NavComponent {

}
