import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMatchGameComponent } from './one-match-game.component';

describe('OneMatchGameComponent', () => {
  let component: OneMatchGameComponent;
  let fixture: ComponentFixture<OneMatchGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMatchGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMatchGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
