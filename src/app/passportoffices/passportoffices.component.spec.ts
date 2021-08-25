import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportofficesComponent } from './passportoffices.component';

describe('PassportofficesComponent', () => {
  let component: PassportofficesComponent;
  let fixture: ComponentFixture<PassportofficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportofficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportofficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
