import { ColorMap, ColorMapTitle } from 'src/app/share/enums/colors.enum';
import { ColorMaps } from 'src/app/share/models/config.model';
import { ManufactureMap, ManufactureMapTitle } from '../enum/airpods.enum';
import { ManufactureMaps } from '../models/config.model';

export const airpodsColorsFilter: ColorMaps[] = [
  { title: ColorMapTitle.spaceGrey, value: ColorMap.spaceGrey },
  { title: ColorMapTitle.white, value: ColorMap.white },
  { title: ColorMapTitle.blue, value: ColorMap.blue },
  { title: ColorMapTitle.purple, value: ColorMap.purple },
  { title: ColorMapTitle.silver, value: ColorMap.silver },
  { title: ColorMapTitle.pink, value: ColorMap.pink },
];
export const airpodsManufactureFilter: ManufactureMaps[] = [
  {
    title: ManufactureMapTitle.twentyNineten,
    value: ManufactureMap.twentyNineten,
  },
  {
    title: ManufactureMapTitle.twentyTwenty,
    value: ManufactureMap.twentyTwenty,
  },
  {
    title: ManufactureMapTitle.twentyTwentyOne,
    value: ManufactureMap.twentyTwentyOne,
  },
];
