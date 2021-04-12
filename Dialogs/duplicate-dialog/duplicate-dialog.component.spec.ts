import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateDialogComponent } from './duplicate-dialog.component';

describe('DuplicateDialogComponent', () => {
  let component: DuplicateDialogComponent;
  let fixture: ComponentFixture<DuplicateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
