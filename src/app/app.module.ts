import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { DeskComponent } from './books/desk/desk.component';
import { CartoonComponent } from './books/cartoon/cartoon.component';
import { NovelComponent } from './books/novel/novel.component';
import { StoryComponent } from './books/story/story.component';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    CartoonComponent,
    NovelComponent,
    StoryComponent,
    DeskComponent,
    ColorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
