import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListSnackComponent } from './recipe-list-snack.component';

describe('RecipeListSnackComponent', () => {
  let component: RecipeListSnackComponent;
  let fixture: ComponentFixture<RecipeListSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
