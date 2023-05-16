import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditTasksComponent } from './page-edit-tasks.component';

describe('PageEditTasksComponent', () => {
  let component: PageEditTasksComponent;
  let fixture: ComponentFixture<PageEditTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEditTasksComponent]
    });
    fixture = TestBed.createComponent(PageEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
