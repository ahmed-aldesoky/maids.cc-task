import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './home-layout/components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  providers: [

    HttpClientModule,
  ],
  declarations: [
    AuthLayoutComponent,
    HomeLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule



  ]
})
export class LayoutsModule { }
