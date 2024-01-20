import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUpdateComponent } from './contact-update.component';

describe('CustomerUpdateComponent', () => {
  let component: ContactUpdateComponent;
  let fixture: ComponentFixture<ContactUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
