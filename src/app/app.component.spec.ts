import { TestBed } from '@angular/core/testing';
import { App } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ App ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have title "Shorts Media App"', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title).toBe('Shorts Media App');
  });
});
