import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable()
export class AlertService {

  error: string
  constructor() { }


  reset(message): void {
    timer(4000).subscribe(_ => this.error = undefined)
    this.error = message
  }
}
