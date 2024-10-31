import { Component } from '@angular/core';
import {Book} from "../book.interface";
@Component({
  selector: 'story',
  template: `
    <p>
      story: {{pages}}
    </p>
  `,
  providers: [{ provide: Book, useExisting: StoryComponent }]
})
export class StoryComponent implements Book {
  pages = '';

  showPages(): void {
    this.pages = '50';
  }
}
