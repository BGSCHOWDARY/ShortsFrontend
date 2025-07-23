import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// ...existing code...
import { ShortsService } from './services/shorts.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShortsService]
})
export class AppModule { }
