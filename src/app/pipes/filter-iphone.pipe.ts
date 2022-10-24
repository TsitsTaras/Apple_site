import { Pipe, PipeTransform } from '@angular/core';
import { ColorMap } from '../share/enums/colors.enum';
import { Iphone } from '../pages/iphone/models/iphone.model';
import { MemoryMap } from '../share/enums/memorys.enum';

@Pipe({
  name: 'filterIphone',
})
export class FilterIphonePipe implements PipeTransform {
  transform(
    iphoneList: Iphone[],
    colors: ColorMap[],
    memorys: MemoryMap[]
  ): Iphone[] {
    return iphoneList
      .filter((el: Iphone) =>
        el.params.color.some(
          (elem: ColorMap) => !colors.length || colors.includes(elem)
        )
      )
      .filter((el: Iphone) =>
        el.params.memory.some(
          (elem: MemoryMap) => !memorys.length || memorys.includes(elem)
        )
      );
  }
}
