import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNabComponent } from './side-nab.component';

describe('SideNabComponent', () => {
  let component: SideNabComponent;
  let fixture: ComponentFixture<SideNabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
