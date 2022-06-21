import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './app-highlight.directive';
import { AppNotDirective } from './app-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AppNotDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
