import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShintoService } from './shinto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MineComponent } from './mine/mine.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    HomeComponent,
    BuyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
