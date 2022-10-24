import { MemoryMap } from 'src/app/share/enums/memorys.enum';
import { ColorMap } from '../../../share/enums/colors.enum';

export interface IphoneParams {
  color: ColorMap[];
  memory: MemoryMap[];
  price: any;
  processor: string;
  size: string;
  frontCamera: string;
  camera: string;
}
export interface Iphone {
  id: number;
  title: string;
  img: string;
  params: IphoneParams;
}
