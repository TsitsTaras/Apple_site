import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateIphoneComponent } from './components/create-iphone/create-iphone.component';
import { CreateIphoneRouting } from './routing/create-iphone.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateIphoneComponent],
  imports: [
    CommonModule,
    CreateIphoneRouting,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class CreateIphoneModule {}
