import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NumberDirective } from './number.directive';
import { HeaderComponent } from './Components/header/header.component';


fdescribe('NumberOnlyDirective', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let inputelement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberDirective, HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    inputelement = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new NumberDirective();
    expect(directive).toBeTruthy();
  });

  it('should allow numeric keys and Backspace', () => {
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'].forEach((key) => {
      const event = new KeyboardEvent('keydown', { key });
      inputelement.triggerEventHandler('keydown', event);
      expect(event.defaultPrevented).toBe(false);
    });
 });

  it('should prevent non-numeric input', () => {
    inputelement.triggerEventHandler('keydown', { key: 'A' });
    fixture.detectChanges();
    expect(inputelement.nativeElement.value).toBe('');
  });

  
});