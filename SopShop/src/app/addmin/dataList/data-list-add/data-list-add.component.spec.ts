import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListAddComponent } from './data-list-add.component';

describe('DataListAddComponent', () => {
  let component: DataListAddComponent;
  let fixture: ComponentFixture<DataListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
