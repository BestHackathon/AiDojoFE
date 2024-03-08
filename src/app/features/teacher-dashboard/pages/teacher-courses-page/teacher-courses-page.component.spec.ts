import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursesPageComponent } from './teacher-courses-page.component';

describe('TeacherCoursesPageComponent', () => {
  let component: TeacherCoursesPageComponent;
  let fixture: ComponentFixture<TeacherCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherCoursesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
