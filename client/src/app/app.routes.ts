import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { JobsComponent } from './components/jobs.component';

export const routes: Routes = [
    { path: 'jobs', component: JobsComponent },
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
