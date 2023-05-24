import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiciosShowComponent } from './card-servicios-show.component';

describe('CardServiciosShowComponent', () => {
  let component: CardServiciosShowComponent;
  let fixture: ComponentFixture<CardServiciosShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardServiciosShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiciosShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
