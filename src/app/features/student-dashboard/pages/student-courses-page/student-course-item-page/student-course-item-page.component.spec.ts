import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseItemPageComponent } from './student-course-item-page.component';

describe('StudentCourseItemPageComponent', () => {
  let component: StudentCourseItemPageComponent;
  let fixture: ComponentFixture<StudentCourseItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCourseItemPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCourseItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
