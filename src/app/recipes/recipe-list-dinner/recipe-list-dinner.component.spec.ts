import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListDinnerComponent } from './recipe-list-dinner.component';

describe('RecipeListDinnerComponent', () => {
  let component: RecipeListDinnerComponent;
  let fixture: ComponentFixture<RecipeListDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
