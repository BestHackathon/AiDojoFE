import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentsPageComponent } from './teacher-students-page.component';

describe('TeacherStudentsPageComponent', () => {
  let component: TeacherStudentsPageComponent;
  let fixture: ComponentFixture<TeacherStudentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherStudentsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
