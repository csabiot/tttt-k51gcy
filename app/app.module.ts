import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncExerciseComponent } from './async-exercise/components/async-exercise.component';
import { AsyncExerciseService } from './async-exercise/services/async-exercise.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AsyncExerciseComponent],
  bootstrap: [AppComponent],
  providers: [AsyncExerciseService]
})
export class AppModule {}
