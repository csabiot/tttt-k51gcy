import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AsyncExerciseService } from '../services/async-exercise.service';

@Component({
  selector: 'async-exercise',
  templateUrl: './async-exercise.component.html',
  styleUrls: ['./async-exercise.component.css']
})
export class AsyncExerciseComponent {
  promise: Promise<string>;
  observable: Observable<number>;

  elements = ['some', 'elements'];
  resultPromise: string;

  constructor(asyncService: AsyncExerciseService) {
    asyncService.getPromise().then(result => this.resultPromise = result.toUpperCase())
  }
}
