import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGridComponent } from './covid-grid.component';

describe('CovidGridComponent', () => {
  let component: CovidGridComponent;
  let fixture: ComponentFixture<CovidGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
