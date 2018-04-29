import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPetStoreComponent } from './about-pet-store.component';

describe('AboutPetStoreComponent', () => {
  let component: AboutPetStoreComponent;
  let fixture: ComponentFixture<AboutPetStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPetStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPetStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
