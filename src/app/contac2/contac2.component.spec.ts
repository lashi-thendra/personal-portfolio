import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contac2Component } from './contac2.component';

describe('Contac2Component', () => {
  let component: Contac2Component;
  let fixture: ComponentFixture<Contac2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Contac2Component]
    });
    fixture = TestBed.createComponent(Contac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
