import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAdicionaisComponent } from './informacoes-adicionais.component';

describe('InformacoesAdicionaisComponent', () => {
  let component: InformacoesAdicionaisComponent;
  let fixture: ComponentFixture<InformacoesAdicionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAdicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
