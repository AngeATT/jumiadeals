import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderInscriptionComponent } from './valider-inscription.component';

describe('ValiderInscriptionComponent', () => {
  let component: ValiderInscriptionComponent;
  let fixture: ComponentFixture<ValiderInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
