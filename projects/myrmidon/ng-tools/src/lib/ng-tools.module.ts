import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './directives/auto-focus.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { FlatLookupPipe } from './pipes/flat-lookup.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AutoFocusDirective,
    EllipsisPipe,
    FlatLookupPipe,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutoFocusDirective,
    EllipsisPipe,
    FlatLookupPipe,
    SafeHtmlPipe,
  ],
})
export class NgToolsModule {}
