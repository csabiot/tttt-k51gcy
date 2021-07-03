import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'async-exercise',
  templateUrl: './async-exercise.component.html',
  styleUrls: ['./async-exercise.component.css']
})
export class AsyncExerciseComponent {
  promise: Promise<string>;
  observable: Observable<number>;

  elements = ['some', 'elements'];

  constructor() {}
}
