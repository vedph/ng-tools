import { Directive, ElementRef, OnInit } from '@angular/core';

// https://stackoverflow.com/questions/56730540/angular-focus-on-input-element-that-has-ngif

/**
 * Auto-focus directive for elements under the control of a structural
 * directive like *ngIf. Just add autoFocus to the desired element:
 * <input type="text" autoFocus *ngIf="isInputVisible">.
 */
@Directive({
  selector: '[autoFocus]',
})
export class AutoFocusDirective implements OnInit {
  private inputElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.inputElement.focus();
  }
}
