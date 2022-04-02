import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListEditComponent } from './data-list-edit.component';

describe('DataListEditComponent', () => {
  let component: DataListEditComponent;
  let fixture: ComponentFixture<DataListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
