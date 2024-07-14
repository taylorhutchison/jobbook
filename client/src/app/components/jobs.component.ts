import { Component } from '@angular/core';
import { JobListComponent } from "./job-list.component";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobListComponent],
  template: `
    <app-job-list>
  `,
  styles: ``
})
export class JobsComponent {

}
