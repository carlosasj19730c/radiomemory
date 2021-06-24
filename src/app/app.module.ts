import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryAPIComponent } from './memory-api/memory-api.component';
import { ROUTES } from './app.routes';
import { DndDirective } from './dnd.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MemoryAPIComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
