import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordQueryComponent } from './word-query.component';

describe('WordQueryComponent', () => {
  let component: WordQueryComponent;
  let fixture: ComponentFixture<WordQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
