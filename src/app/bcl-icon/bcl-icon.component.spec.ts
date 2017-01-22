/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BclIconComponent } from './bcl-icon.component';

describe('BclIconComponent', () => {
  let component: BclIconComponent;
  let fixture: ComponentFixture<BclIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BclIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BclIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be has align-justify icon', () => {
    component.icon = "align-justify";
    expect(component.icon).toBe('align-justify');
  })
});
