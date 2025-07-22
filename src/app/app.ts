import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app';
import { ShortsListComponent } from './components/shorts-list/shorts-list';
import { SafeUrlPipe } from './pipes/safe-url-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortsListComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
