import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CointreesearchComponent } from './cointreesearch.component';

describe('CointreesearchComponent', () => {
  let component: CointreesearchComponent;
  let fixture: ComponentFixture<CointreesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CointreesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CointreesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
