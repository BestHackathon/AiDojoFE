import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentCardComponent } from './teacher-student-card.component';

describe('TeacherStudentCardComponent', () => {
  let component: TeacherStudentCardComponent;
  let fixture: ComponentFixture<TeacherStudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherStudentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
