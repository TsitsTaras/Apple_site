import { MemoryMap, MemoryMapTitle } from 'src/app/share/enums/memorys.enum';
import { ColorMap, ColorMapTitle } from '../../../share/enums/colors.enum';
import { ColorMaps, MemoryMaps } from '../../../share/models/config.model';

export const ColorConfigMap = {
  [ColorMap.black]: 'black',
  [ColorMap.blue]: 'blue',
  [ColorMap.green]: 'green',
  [ColorMap.red]: 'red',
  [ColorMap.white]: 'white',
  [ColorMap.silver]: 'silver',
  [ColorMap.spaceGrey]: 'spaceGrey',
  [ColorMap.midnight]: 'midnight',
  [ColorMap.starlight]: 'starlight',
  [ColorMap.gold]: 'gold',
  [ColorMap.pink]: 'pink',
  [ColorMap.purple]: 'purple',
};
export const iphoneColorsFilter: ColorMaps[] = [
  { title: ColorMapTitle.black, value: ColorMap.black },
  { title: ColorMapTitle.blue, value: ColorMap.blue },
  { title: ColorMapTitle.red, value: ColorMap.red },
  { title: ColorMapTitle.white, value: ColorMap.white },
  { title: ColorMapTitle.green, value: ColorMap.green },
  { title: ColorMapTitle.silver, value: ColorMap.silver },
];
export const iphoneMemoryFilter: MemoryMaps[] = [
  { title: MemoryMapTitle.sixtyFour, value: MemoryMap.sixtyFour },
  { title: MemoryMapTitle.oneTwentyEight, value: MemoryMap.oneTwentyEight },
  { title: MemoryMapTitle.twoFiftySix, value: MemoryMap.twoFiftySix },
  { title: MemoryMapTitle.fiveTwelve, value: MemoryMap.fiveTwelve },
];
export const SizeConfigMap = {
  ['6,1"']: '6,1"',
  ['6,7"']: '6,7"',
};
export const ProcessorConfigMap = {
  ['Apple A14 Bionic']: 'Apple A14 Bionic',
  ['Apple A15 Bionic']: 'Apple A15 Bionic',
};
export const FrontCameraConfigMap = {
  ['12MP']: '12MP',
};
export const MainCameraConfigMap = {
  ['12MP+12MP+12MP']: '12MP+12MP+12MP',
  ['12MP+12MP']: '12MP+12MP',
};
