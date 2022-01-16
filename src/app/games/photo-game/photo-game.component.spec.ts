import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGameComponent } from './photo-game.component';

describe('PhotoGameComponent', () => {
  let component: PhotoGameComponent;
  let fixture: ComponentFixture<PhotoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
