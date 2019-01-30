import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeListPage } from './tree-list.page';

describe('TreeListPage', () => {
  let component: TreeListPage;
  let fixture: ComponentFixture<TreeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
