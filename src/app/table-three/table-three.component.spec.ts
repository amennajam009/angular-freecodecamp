import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableThreeComponent } from './table-three.component';

describe('TableThreeComponent', () => {
  let component: TableThreeComponent;
  let fixture: ComponentFixture<TableThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableThreeComponent]
    });
    fixture = TestBed.createComponent(TableThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
