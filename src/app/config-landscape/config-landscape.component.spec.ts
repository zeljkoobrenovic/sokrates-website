import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLandscapeComponent } from './config-landscape.component';

describe('ConfigLandscapeComponent', () => {
  let component: ConfigLandscapeComponent;
  let fixture: ComponentFixture<ConfigLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
