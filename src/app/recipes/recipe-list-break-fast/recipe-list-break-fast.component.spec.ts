import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListBreakFastComponent } from './recipe-list-break-fast.component';

describe('RecipeListBreakFastComponent', () => {
  let component: RecipeListBreakFastComponent;
  let fixture: ComponentFixture<RecipeListBreakFastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListBreakFastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListBreakFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
