import { Pipe, PipeTransform } from '@angular/core';
import { SizeMap } from '../pages/apple-watch/enum/apple-watch.enum';
import { AppleWatch } from '../pages/apple-watch/models/apple-watch.model';
import { ColorMap } from '../share/enums/colors.enum';

@Pipe({
  name: 'filterAppleWatch',
})
export class FilterAppleWatchPipe implements PipeTransform {
  transform(
    appleWatchList: AppleWatch[],
    colors: ColorMap[],
    sizes: SizeMap[]
  ): AppleWatch[] {
    return appleWatchList
      .filter((el: AppleWatch) =>
        el.params.color.some(
          (elem: ColorMap) => !colors.length || colors.includes(elem)
        )
      )
      .filter((el: AppleWatch) =>
        el.params.size.some(
          (elem: SizeMap) => !sizes.length || sizes.includes(elem)
        )
      );
  }
}
