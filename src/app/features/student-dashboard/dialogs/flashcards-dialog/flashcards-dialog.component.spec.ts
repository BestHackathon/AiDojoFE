import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsDialogComponent } from './flashcards-dialog.component';

describe('FlashcardsDialogComponent', () => {
  let component: FlashcardsDialogComponent;
  let fixture: ComponentFixture<FlashcardsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashcardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
