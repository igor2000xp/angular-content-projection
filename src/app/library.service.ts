import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  read(): void {
    console.log('Service read the book');
  }
}
