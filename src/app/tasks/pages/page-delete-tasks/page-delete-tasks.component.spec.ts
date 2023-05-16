import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteTasksComponent } from './page-delete-tasks.component';

describe('PageDeleteTasksComponent', () => {
  let component: PageDeleteTasksComponent;
  let fixture: ComponentFixture<PageDeleteTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDeleteTasksComponent]
    });
    fixture = TestBed.createComponent(PageDeleteTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
