import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanlordComponent } from './lanlord.component';

describe('LanlordComponent', () => {
  let component: LanlordComponent;
  let fixture: ComponentFixture<LanlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
