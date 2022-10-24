import { ColorMap } from 'src/app/share/enums/colors.enum';
import { MemoryMap } from 'src/app/share/enums/memorys.enum';

export interface MacParams {
  color: ColorMap[];
  ram: MemoryMap[];
  ssd: MemoryMap[];
  price: string;
  size: string;
  processor: string;
}
export interface Mac {
  id: number;
  title: string;
  img: string;
  params: MacParams;
}
