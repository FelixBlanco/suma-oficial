import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSolicitudesCitasComponent } from './mis-solicitudes-citas.component';

describe('MisSolicitudesCitasComponent', () => {
  let component: MisSolicitudesCitasComponent;
  let fixture: ComponentFixture<MisSolicitudesCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSolicitudesCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSolicitudesCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
