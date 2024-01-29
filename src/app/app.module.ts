import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { NumberDirective } from './number.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    NumberDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[
    AppComponent
  ],
 
})
export class AppModule { }
