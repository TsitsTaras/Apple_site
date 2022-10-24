'id';
import { ColorMap } from 'src/app/share/enums/colors.enum';
import { MemoryMap } from 'src/app/share/enums/memorys.enum';

export interface IpadParams {
  color: ColorMap[];
  memory: MemoryMap[];
  price: string;
  processor: string;
  size: string;
  frontCamera: string;
  camera: string;
}
export interface Ipad {
  id: number;
  title: string;
  img: string;
  params: IpadParams;
}
