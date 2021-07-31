import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerieViewComponent } from './add-serie-view.component';

describe('AddSerieViewComponent', () => {
  let component: AddSerieViewComponent;
  let fixture: ComponentFixture<AddSerieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSerieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
