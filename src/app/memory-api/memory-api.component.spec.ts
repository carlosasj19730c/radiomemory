import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryAPIComponent } from './memory-api.component';

describe('MemoryAPIComponent', () => {
  let component: MemoryAPIComponent;
  let fixture: ComponentFixture<MemoryAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
