import { ColorMap, ColorMapTitle } from 'src/app/share/enums/colors.enum';
import { ColorMaps } from 'src/app/share/models/config.model';
import { SizeMap, SizeMapTitle } from '../enum/apple-watch.enum';
import { SizeMaps } from '../models/config.model';

export const appleWatchColorsFilter: ColorMaps[] = [
  { title: ColorMapTitle.spaceGrey, value: ColorMap.spaceGrey },
  { title: ColorMapTitle.blue, value: ColorMap.blue },
  { title: ColorMapTitle.midnight, value: ColorMap.midnight },
  { title: ColorMapTitle.silver, value: ColorMap.silver },
  { title: ColorMapTitle.starlight, value: ColorMap.starlight },
  { title: ColorMapTitle.green, value: ColorMap.green },
  { title: ColorMapTitle.black, value: ColorMap.black },
  { title: ColorMapTitle.gold, value: ColorMap.gold },
];
export const appleWatchSizeFilter: SizeMaps[] = [
  { title: SizeMapTitle.forty, value: SizeMap.forty },
  { title: SizeMapTitle.fortyOne, value: SizeMap.fortyOne },
  { title: SizeMapTitle.fortyFour, value: SizeMap.fortyFour },
  { title: SizeMapTitle.fortyFive, value: SizeMap.fortyFive },
];
