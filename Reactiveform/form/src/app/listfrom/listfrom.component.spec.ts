import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfromComponent } from './listfrom.component';

describe('ListfromComponent', () => {
  let component: ListfromComponent;
  let fixture: ComponentFixture<ListfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

