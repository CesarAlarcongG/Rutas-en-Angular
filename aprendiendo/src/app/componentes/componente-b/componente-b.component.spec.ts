import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBComponent } from './componente-b.component';

describe('ComponenteBComponent', () => {
  let component: ComponenteBComponent;
  let fixture: ComponentFixture<ComponenteBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
