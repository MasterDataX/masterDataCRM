import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FirstMenuComponent } from 'src/app/components/first-menu/first-menu.component';
@NgModule({
  declarations: [
    HomeComponent, 
    FirstMenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
