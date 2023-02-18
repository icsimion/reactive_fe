import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsReactiveComponent } from './contacts-reactive.component';

describe('ContactsReactiveComponent', () => {
  let component: ContactsReactiveComponent;
  let fixture: ComponentFixture<ContactsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
