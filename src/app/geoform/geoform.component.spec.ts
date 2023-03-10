import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoformComponent } from './geoform.component';

describe('GeoformComponent', () => {
  let component: GeoformComponent;
  let fixture: ComponentFixture<GeoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
