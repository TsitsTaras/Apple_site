import { ColorMap, ColorMapTitle } from 'src/app/share/enums/colors.enum';
import { MemoryMap, MemoryMapTitle } from 'src/app/share/enums/memorys.enum';
import { ColorMaps, MemoryMaps } from 'src/app/share/models/config.model';

export const ipadColorsFilter: ColorMaps[] = [
  { title: ColorMapTitle.spaceGrey, value: ColorMap.spaceGrey },
  { title: ColorMapTitle.blue, value: ColorMap.blue },
  { title: ColorMapTitle.purple, value: ColorMap.purple },
  { title: ColorMapTitle.silver, value: ColorMap.silver },
  { title: ColorMapTitle.starlight, value: ColorMap.starlight },
  { title: ColorMapTitle.pink, value: ColorMap.pink },
];
export const ipadMemoryFilter: MemoryMaps[] = [
  { title: MemoryMapTitle.sixtyFour, value: MemoryMap.sixtyFour },
  { title: MemoryMapTitle.oneTwentyEight, value: MemoryMap.oneTwentyEight },
  { title: MemoryMapTitle.twoFiftySix, value: MemoryMap.twoFiftySix },
  { title: MemoryMapTitle.fiveTwelve, value: MemoryMap.fiveTwelve },
  { title: MemoryMapTitle.one, value: MemoryMap.one },
  { title: MemoryMapTitle.two, value: MemoryMap.two },
];
