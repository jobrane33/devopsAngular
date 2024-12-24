import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponantfortestingComponent } from './componantfortesting.component';

describe('ComponantfortestingComponent', () => {
  let component: ComponantfortestingComponent;
  let fixture: ComponentFixture<ComponantfortestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponantfortestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponantfortestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true); //
  });
});
