import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOfContactsComponent } from './list-of-contacts/list-of-contacts.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfContactsComponent,
    ContactCardComponent
  ],
  entryComponents: [ ContactCardComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
