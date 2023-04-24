import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySistemaComponent } from './body-sistema.component';

describe('BodySistemaComponent', () => {
  let component: BodySistemaComponent;
  let fixture: ComponentFixture<BodySistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
