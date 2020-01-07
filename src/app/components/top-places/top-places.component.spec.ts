import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlacesComponent } from './top-places.component';

describe('TopPlacesComponent', () => {
  let component: TopPlacesComponent;
  let fixture: ComponentFixture<TopPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
