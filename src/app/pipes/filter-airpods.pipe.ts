import { Pipe, PipeTransform } from '@angular/core';
import { ManufactureMap } from '../pages/airpods/enum/airpods.enum';
import { Airpods } from '../pages/airpods/models/airpods.model';
import { ColorMap } from '../share/enums/colors.enum';

@Pipe({
  name: 'filterAirpods',
})
export class FilterAirpodsPipe implements PipeTransform {
  transform(
    airpodsList: Airpods[],
    colors: ColorMap[],
    manufacture: ManufactureMap[]
  ): Airpods[] {
    return airpodsList
      .filter((el: Airpods) =>
        el.params.color.some(
          (elem: ColorMap) => !colors.length || colors.includes(elem)
        )
      )
      .filter((el: Airpods) =>
        el.params.manufacture.some(
          (elem: ManufactureMap) =>
            !manufacture.length || manufacture.includes(elem)
        )
      );
  }
}
