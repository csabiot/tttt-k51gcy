import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncExerciseModule } from './async-exercise/async-exercise.module';

@NgModule({
  imports: [BrowserModule, AsyncExerciseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
