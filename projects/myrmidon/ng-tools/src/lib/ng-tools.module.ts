import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './directives/auto-focus.directive';

import { ColorToContrastPipe } from './pipes/color-to-contrast.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { FlatLookupPipe } from './pipes/flat-lookup.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { StringToColorPipe } from './pipes/string-to-color.pipe';

@NgModule({
  declarations: [
    AutoFocusDirective,
    ColorToContrastPipe,
    EllipsisPipe,
    FlatLookupPipe,
    JoinPipe,
    SafeHtmlPipe,
    StringToColorPipe
  ],
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    ColorToContrastPipe,
    EllipsisPipe,
    FlatLookupPipe,
    JoinPipe,
    SafeHtmlPipe,
    StringToColorPipe
  ],
})
export class NgToolsModule {}
