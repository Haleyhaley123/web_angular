import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListListComponent } from './data-list-list.component';

describe('DataListListComponent', () => {
  let component: DataListListComponent;
  let fixture: ComponentFixture<DataListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
