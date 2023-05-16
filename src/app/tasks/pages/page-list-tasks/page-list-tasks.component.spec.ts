import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTasksComponent } from './page-list-tasks.component';

describe('PageListTasksComponent', () => {
  let component: PageListTasksComponent;
  let fixture: ComponentFixture<PageListTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageListTasksComponent]
    });
    fixture = TestBed.createComponent(PageListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
