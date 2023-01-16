import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadJsonComponent } from './read-json/read-json.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadJsonServiceService } from './read-json-service.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ReadJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReadJsonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
