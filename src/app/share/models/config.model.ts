import { ColorMap, ColorMapTitle } from '../enums/colors.enum';
import { MemoryMap, MemoryMapTitle } from '../enums/memorys.enum';

export interface ColorMaps {
  title: ColorMapTitle;
  value: ColorMap;
}
export interface MemoryMaps {
  title: MemoryMapTitle;
  value: MemoryMap;
}
