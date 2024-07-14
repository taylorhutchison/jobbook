import { ChangeDetectionStrategy, Component, WritableSignal } from '@angular/core';
import { DataService } from '../services/data.service';
import {MatListModule} from '@angular/material/list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [ MatListModule, NgFor ],
  template: `
    <mat-list>
      <mat-list-item *ngFor="let job of jobs()" role="listitem">
        <span matListItemTitle>{{ job.title }}</span>
        <span matListItemLine>{{ job.description }}</span>
      </mat-list-item>
    <mat-list>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {

  jobs: WritableSignal<any> = this.dataService.jobs;

  constructor(private dataService: DataService) {

  }

}
