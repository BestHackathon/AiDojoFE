import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHomePageComponent } from './teacher-home-page.component';

describe('TeacherHomePageComponent', () => {
  let component: TeacherHomePageComponent;
  let fixture: ComponentFixture<TeacherHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
