import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectPage } from './about-project.page';

describe('AboutProjectPage', () => {
  let component: AboutProjectPage;
  let fixture: ComponentFixture<AboutProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
