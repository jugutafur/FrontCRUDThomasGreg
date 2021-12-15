import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    BannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
