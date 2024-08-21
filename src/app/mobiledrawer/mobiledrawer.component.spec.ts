import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledrawerComponent } from './mobiledrawer.component';

describe('MobiledrawerComponent', () => {
  let component: MobiledrawerComponent;
  let fixture: ComponentFixture<MobiledrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobiledrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiledrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
