/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BclPercentageBarComponent } from './bcl-percentage-bar.component';

describe('BclPercentageBarComponent', () => {
  let component: BclPercentageBarComponent;
  let fixture: ComponentFixture<BclPercentageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BclPercentageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BclPercentageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
