import { ColorMap } from 'src/app/share/enums/colors.enum';
import { SizeMap } from '../enum/apple-watch.enum';

export interface AppleWatchParams {
  color: ColorMap[];
  processor: string;
  communication: string;
  price: string;
  size: SizeMap[];
}
export interface AppleWatch {
  id: number;
  title: string;
  img: string;
  params: AppleWatchParams;
}
