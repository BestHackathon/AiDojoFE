import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLectureItemPageComponent } from './student-lecture-item-page.component';

describe('StudentLectureItemPageComponent', () => {
  let component: StudentLectureItemPageComponent;
  let fixture: ComponentFixture<StudentLectureItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLectureItemPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentLectureItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
