import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AsyncExerciseComponent } from './components/async-exercise.component';
import { AsyncExerciseService } from './services/async-exercise.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AsyncExerciseComponent],
  providers: [AsyncExerciseService],
  exports: [AsyncExerciseComponent]
})
export class AsyncExerciseModule {}
