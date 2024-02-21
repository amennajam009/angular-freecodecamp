import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDynamicCompComponent } from './get-dynamic-comp.component';

describe('GetDynamicCompComponent', () => {
  let component: GetDynamicCompComponent;
  let fixture: ComponentFixture<GetDynamicCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDynamicCompComponent]
    });
    fixture = TestBed.createComponent(GetDynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
