import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiteshComponent } from './mitesh.component';

describe('MiteshComponent', () => {
  let component: MiteshComponent;
  let fixture: ComponentFixture<MiteshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiteshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiteshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
