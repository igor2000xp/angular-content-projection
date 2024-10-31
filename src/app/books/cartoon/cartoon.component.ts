import {Component, Host, Optional, Self} from '@angular/core';
import {LibraryService} from "../../library.service";
import {Book} from "../book.interface";

@Component({
  selector: 'cartoon',
  template: `
    <p>
      cartoon: {{ pages }}
    </p>
  `,
  providers: [{ provide: Book, useExisting: CartoonComponent }]
})
export class CartoonComponent implements Book {
  pages = '';

  showPages(): void {
    this.pages = '30'
  }
}
