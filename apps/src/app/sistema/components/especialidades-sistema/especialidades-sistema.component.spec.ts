import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesSistemaComponent } from './especialidades-sistema.component';

describe('EspecialidadesSistemaComponent', () => {
  let component: EspecialidadesSistemaComponent;
  let fixture: ComponentFixture<EspecialidadesSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadesSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
