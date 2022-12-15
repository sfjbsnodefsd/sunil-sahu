import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPensionComponent } from './show-pension.component';

describe('ShowPensionComponent', () => {
  let component: ShowPensionComponent;
  let fixture: ComponentFixture<ShowPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
