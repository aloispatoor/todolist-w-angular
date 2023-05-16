import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTasksComponent } from './page-add-tasks.component';

describe('PageAddTasksComponent', () => {
  let component: PageAddTasksComponent;
  let fixture: ComponentFixture<PageAddTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAddTasksComponent]
    });
    fixture = TestBed.createComponent(PageAddTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
