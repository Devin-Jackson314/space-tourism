import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdisplayComponent } from './techdisplay.component';

describe('TechdisplayComponent', () => {
  let component: TechdisplayComponent;
  let fixture: ComponentFixture<TechdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
