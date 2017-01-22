/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BclComponent } from './bcl.component';
import { BclIconComponent } from './bcl-icon/bcl-icon.component';

describe('BclComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BclComponent,
        BclIconComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(BclComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(BclComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bcl works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(BclComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('bcl works!');
  }));
});
