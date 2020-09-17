import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CointreedataComponent } from './cointreedata.component';

describe('CointreedataComponent', () => {
  let component: CointreedataComponent;
  let fixture: ComponentFixture<CointreedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CointreedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CointreedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
