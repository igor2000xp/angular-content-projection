import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';

describe('ZooComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryComponent]
    });
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
