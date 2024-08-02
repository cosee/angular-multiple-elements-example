import {NgModule, ViewChild, ViewContainerRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WithHostElementComponent } from './components/with-host-element/with-host-element.component';
import { OutsideHostElementComponent } from './components/outside-host-element/outside-host-element.component';
import { DisplayContentsComponent } from './components/display-contents/display-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    WithHostElementComponent,
    OutsideHostElementComponent,
    DisplayContentsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
