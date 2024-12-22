import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { StudentsCrudComponent } from './students-crud/students-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(), 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
