import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncExerciseModule } from './async-exercise/async-exercise.module';
import { AsyncExerciseComponent } from './async-exercise/components/async-exercise.component';

@NgModule({
  imports: [BrowserModule, AsyncExerciseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
