import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsList } from './shorts-list';

describe('ShortsList', () => {
  let component: ShortsList;
  let fixture: ComponentFixture<ShortsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
