import { ColorMap } from 'src/app/share/enums/colors.enum';
import { ManufactureMap } from '../enum/airpods.enum';

export interface AirpodsParams {
  color: ColorMap[];
  price: string;
  manufacture: ManufactureMap[];
}
export interface Airpods {
  id: number;
  title: string;
  img: string;
  params: AirpodsParams;
}
