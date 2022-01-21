import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseGameComponent } from './phrase-game.component';

describe('PhraseGameComponent', () => {
  let component: PhraseGameComponent;
  let fixture: ComponentFixture<PhraseGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
