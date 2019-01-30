import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewPage } from './tree-view.page';

describe('TreeViewPage', () => {
  let component: TreeViewPage;
  let fixture: ComponentFixture<TreeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
