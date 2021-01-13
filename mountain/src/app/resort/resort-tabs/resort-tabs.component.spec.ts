import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortTabsComponent } from './resort-tabs.component';

describe('ResortTabsComponent', () => {
  let component: ResortTabsComponent;
  let fixture: ComponentFixture<ResortTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
