/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BclIconComponent } from './bcl-icon.component';

describe('BclIconComponent', () => {
  let component: BclIconComponent;
  let fixture: ComponentFixture<BclIconComponent>;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BclIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BclIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    ne = de.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should icon property to be "align-justify"', () => {
    component.icon = "align-justify";
    expect(component.icon).toBe('align-justify');
  });

  it('should text property to be "Hello"', () => {
    component.text = "Hello";
    expect(component.text).toBe('Hello');
  });

  it('should textPosition property to be "bottom"', () => {
    component.textPosition = "bottom";
    expect(component.textPosition).toBe('bottom');
  });

  it('should icon DOM element with class "align-justify" exists', () => {
    component.icon = "align-justify";
    fixture.detectChanges();
    let el = ne.querySelector('i.fa-' + component.icon);
    expect(el).toBeDefined();
    
  });

  it('should text element contain "Hello"', async(() => {
    component.text = "Hello";
    fixture.detectChanges();
    let el = ne.querySelector('span.text');
    expect(el.textContent).toContain('Hello');
  }));

   it('should "text-bottom" class exists', async(() => {
    component.textPosition = "bottom";
    fixture.detectChanges()
    let el = ne.querySelector('span.text-' + component.textPosition);
    expect(el).toBeDefined();
  }));

});
