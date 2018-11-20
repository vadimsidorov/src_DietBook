import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListLunchComponent } from './recipe-list-lunch.component';

describe('RecipeListLunchComponent', () => {
  let component: RecipeListLunchComponent;
  let fixture: ComponentFixture<RecipeListLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
