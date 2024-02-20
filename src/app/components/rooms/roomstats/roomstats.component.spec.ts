import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomstatsComponent } from './roomstats.component';

describe('RoomstatsComponent', () => {
  let component: RoomstatsComponent;
  let fixture: ComponentFixture<RoomstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
