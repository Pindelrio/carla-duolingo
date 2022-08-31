import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPhraseGameComponent } from './sort-phrase-game.component';

describe('SortPhraseGameComponent', () => {
  let component: SortPhraseGameComponent;
  let fixture: ComponentFixture<SortPhraseGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortPhraseGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPhraseGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
