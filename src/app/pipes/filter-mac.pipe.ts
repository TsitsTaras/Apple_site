import { Pipe, PipeTransform } from '@angular/core';
import { Mac } from '../pages/mac/models/mac.model';
import { MemoryMap } from '../share/enums/memorys.enum';

@Pipe({
  name: 'filterMac',
})
export class FilterMacPipe implements PipeTransform {
  transform(macList: Mac[], ram: MemoryMap[], ssd: MemoryMap[]): Mac[] {
    return macList
      .filter((el: Mac) =>
        el.params.ram.some(
          (elem: MemoryMap) => !ram.length || ram.includes(elem)
        )
      )
      .filter((el: Mac) =>
        el.params.ssd.some(
          (elem: MemoryMap) => !ssd.length || ssd.includes(elem)
        )
      );
  }
}
