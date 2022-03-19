import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatLookup',
})
export class FlatLookupPipe implements PipeTransform {
  private findDelimIndexWithin(
    text: string,
    index: number,
    limit: number,
    delims: string
  ): number {
    if (delims.includes(text[index])) {
      return index;
    }
    for (let i = -limit; i <= limit; i++) {
      if (delims.includes(text[i])) {
        return i;
      }
    }
    return index;
  }

  /**
   * Transform the specified string cutting it when its length
   * exceeds a specified limit.
   *
   * @param value The string to cut.
   * @param limit The maximum count of characters.
   * @param smart True to try cut at a delimiter around limit.
   * @param delims A string with all the delimiter characters.
   * @param ellipsis The ellipsis suffix to append to the end
   * of the result.
   * @returns The string, cut if exceeding limit.
   */
  transform(
    value: string | null | undefined,
    limit = 50,
    smart = true,
    delims = '!?.;:,',
    ellipsis = '...'
  ): string | null {
    if (!value) {
      return null;
    }
    if (value.length <= limit) {
      return value;
    }
    if (smart) {
      let i = this.findDelimIndexWithin(value, limit, limit / 10, delims);
      return value.substring(0, i) + ellipsis;
    } else {
      return value.substring(0, limit) + ellipsis;
    }
  }
}
