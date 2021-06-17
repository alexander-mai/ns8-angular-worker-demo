import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  readonly worker: Worker;
  public workerResponse: string;

  constructor() {
    this.worker = new Worker("~/workers/useless.worker");
    this.worker.onmessage = msg => this.workerResponse = msg.data;
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  callUselessWorker() {
    this.worker.postMessage(Math.random()*10);
  }
}
