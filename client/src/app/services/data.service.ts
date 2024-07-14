import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly jobs = signal([] as Array<any>);

  constructor() { 
    const jobs = [
      { id: this.generateGUID(), title: 'Job 1', description: 'Job 1 Description' },
      { id: this.generateGUID(), title: 'Job 2', description: 'Job 2 Description' },
      { id: this.generateGUID(), title: 'Job 3', description: 'Job 3 Description' }
    ];
    console.log(jobs);
    this.jobs.set(jobs);
  }

  addJob() {
    
  }

  private generateGUID(): string {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

}
