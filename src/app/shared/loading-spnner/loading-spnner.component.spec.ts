import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpnnerComponent } from './loading-spnner.component';

describe('LoadingSpnnerComponent', () => {
  let component: LoadingSpnnerComponent;
  let fixture: ComponentFixture<LoadingSpnnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpnnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSpnnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
