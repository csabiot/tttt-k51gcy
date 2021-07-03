import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AsyncExerciseService {
  public getObservable(): Observable<number> {
    return Observable.interval(1000)
      .take(20)
      .map(v => v * v);
  }

  public getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise complete!'), 3000);
    });
  }
}
