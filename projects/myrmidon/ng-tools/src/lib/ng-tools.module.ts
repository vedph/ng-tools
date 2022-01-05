import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AutoFocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlPipe,
    AutoFocusDirective
  ],
})
export class NgToolsModule {}
