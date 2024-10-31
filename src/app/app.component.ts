import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit, QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {CartoonComponent} from "./books/cartoon/cartoon.component";
import {LibraryService} from "./library.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // @ViewChild('book') cartoonComponent!: CartoonComponent;
  // @ViewChild(CartoonComponent) cartoonComponent!: CartoonComponent;
  // @ViewChild(LibraryService) libraryService!: LibraryService;
  // @ViewChild('someToken') someToken!: string;
  // @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;

  // @ContentChild('book') book!: CartoonComponent;
  // @ContentChild(CartoonComponent) book!: CartoonComponent;
  // @ContentChild(LibraryService) libraryService!: LibraryService;
  // @ContentChild('someToked') someToken!: string;
  // @ContentChild(TemplateRef) TemplateRef!: TemplateRef<any>;


  @ViewChild('book', {read: ElementRef, static: true}) elementRef!: ElementRef;

  @ViewChildren('book') bookList: QueryList<any> = new QueryList<any>();

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.bookList.forEach(book => {
    //     book.pages = 1;
    //   })
    // }, 3000);

  }
}
