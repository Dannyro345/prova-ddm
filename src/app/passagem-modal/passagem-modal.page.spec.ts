import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemModalPage } from './passagem-modal.page';

describe('PassagemModalPage', () => {
  let component: PassagemModalPage;
  let fixture: ComponentFixture<PassagemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
