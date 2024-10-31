import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef, Host,
  OnInit, QueryList,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {CartoonComponent} from "../books/cartoon/cartoon.component";
import {LibraryService} from "../library.service";
import {Book} from "../books/book.interface";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  // providers: [LibraryService]
})
export class LibraryComponent implements AfterViewInit {


  // @ContentChild('book') book!: CartoonComponent;
  // @ContentChild(CartoonComponent, { descendants: true, static: false }) book!: CartoonComponent;
  // @ContentChild(LibraryService) libraryService: LibraryService;
  // @ContentChild('someToken') someToken!: string;
  // @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  @ContentChildren(Book) books!: QueryList<any>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.books.forEach(book => {
        book.showPages();
      })
    }, 3000);
  }
}
