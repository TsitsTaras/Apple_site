import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ColorConfigMap,
  FrontCameraConfigMap,
  MainCameraConfigMap,
  ProcessorConfigMap,
  SizeConfigMap,
} from 'src/app/pages/iphone/config/iphone.config';
import { Iphone } from 'src/app/pages/iphone/models/iphone.model';
import { HttpService } from 'src/app/services/http.service';
import { ColorMap } from 'src/app/share/enums/colors.enum';
import { MemoryMap, MemoryMapTitle } from 'src/app/share/enums/memorys.enum';

@Component({
  selector: 'app-create-iphone',
  templateUrl: './create-iphone.component.html',
  styleUrls: ['./create-iphone.component.scss'],
})
export class CreateIphoneComponent implements OnInit {
  formGroup!: FormGroup;

  sizeConfigMap: any[] = Object.values(SizeConfigMap);
  processorConfigMap: any[] = Object.values(ProcessorConfigMap);
  frontCameraConfigMap: any[] = Object.values(FrontCameraConfigMap);
  mainCameraConfigMap: any[] = Object.values(MainCameraConfigMap);
  colorsList: any[] = Object.keys(ColorMap)
    .filter((el) => !isNaN(+el))
    .map((el) => +el);
  memorysList: any[] = Object.values(MemoryMapTitle);
  colorsMap: { [key: number]: string } = ColorConfigMap;
  memorysMap = MemoryMap;
  activeColors: Set<number> = new Set();
  activeMemorys: Set<string> = new Set();

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(null),
      size: new FormControl(null),
      processor: new FormControl(null),
      frontCamera: new FormControl(null),
      mainCamera: new FormControl(null),
    });
    // this.service.createIphone(this.data).subscribe((res: any) => {
    //   this.formGroup = res;
    // });
  }
  onActiveColors(color: number) {
    if (this.activeColors.has(color)) {
      this.activeColors.delete(color);
    } else {
      this.activeColors.add(color);
    }
  }
  onActiveMemorys(memory: any) {
    if (this.activeMemorys.has(memory)) {
      this.activeMemorys.delete(memory);
    } else {
      this.activeMemorys.add(memory);
    }
  }
  onSubmit() {
    const data = {
      title: this.formGroup.value.title,
      img: 'https://hotline.ua/img/tx/298/298912024_s265.jpg',
      params: {
        color: [...this.activeColors],
        memory: [...this.activeMemorys],
        price: ['850$', '930$', '1045$'],
        processor: this.formGroup.value.processor,
        size: this.formGroup.value.size,
        frontCamera: this.formGroup.value.frontCamera,
        camera: this.formGroup.value.mainCamera,
      },
    };
    console.log(data);
  }
}
