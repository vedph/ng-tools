import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './directives/auto-focus.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { FlatLookupPipe } from './pipes/flat-lookup.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AutoFocusDirective,
    EllipsisPipe,
    FlatLookupPipe,
    JoinPipe,
    SafeHtmlPipe,
  ],
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    EllipsisPipe,
    FlatLookupPipe,
    JoinPipe,
    SafeHtmlPipe,
  ],
})
export class NgToolsModule {}
