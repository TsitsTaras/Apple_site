import { Pipe, PipeTransform } from '@angular/core';
import { Ipad } from '../pages/ipad/models/ipad.models';
import { ColorMap } from '../share/enums/colors.enum';
import { MemoryMap } from '../share/enums/memorys.enum';

@Pipe({
  name: 'filterIpad',
})
export class FilterIpadPipe implements PipeTransform {
  transform(
    ipadList: Ipad[],
    colors: ColorMap[],
    memorys: MemoryMap[]
  ): Ipad[] {
    return ipadList
      .filter((el: Ipad) =>
        el.params.color.some(
          (elem: ColorMap) => !colors.length || colors.includes(elem)
        )
      )
      .filter((el: Ipad) =>
        el.params.memory.some(
          (elem: MemoryMap) => !memorys.length || memorys.includes(elem)
        )
      );
  }
}
