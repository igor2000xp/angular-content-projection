import { Component } from '@angular/core';
import {Book} from "../book.interface";

@Component({
  selector: 'novel',
  template: `
    <p>
      novel: {{pages}}
    </p>
  `,
  providers: [{ provide: Book, useExisting: NovelComponent }]
})
export class NovelComponent implements Book {
  pages = '';

    showPages() {
        this.pages = '300'
    }
}
