import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsReactiveComponent } from './contacts-reactive/contacts-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsReactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
