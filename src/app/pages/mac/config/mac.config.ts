import { MemoryMap, MemoryMapTitle } from 'src/app/share/enums/memorys.enum';
import { MemoryMaps } from 'src/app/share/models/config.model';

export const macRamFilter: MemoryMaps[] = [
  { title: MemoryMapTitle.eigth, value: MemoryMap.eigth },
  { title: MemoryMapTitle.sixten, value: MemoryMap.sixten },
  { title: MemoryMapTitle.twentyFour, value: MemoryMap.twentyFour },
  { title: MemoryMapTitle.thirtyTwo, value: MemoryMap.thirtyTwo },
];
export const macSddFilter: MemoryMaps[] = [
  { title: MemoryMapTitle.twoFiftySix, value: MemoryMap.twoFiftySix },
  { title: MemoryMapTitle.fiveTwelve, value: MemoryMap.fiveTwelve },
  { title: MemoryMapTitle.one, value: MemoryMap.one },
];
