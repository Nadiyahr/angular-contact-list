import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contact-list';
  toggle = true;
  contacts?: Contact[];
  selectedContact?: Contact;
  eyeAwesome = `<i class="far fa-eye"></i>`;
  slashAwesome = '<i class="far fa-eye-slash"></i>';

  constructor(private _contactService: ContactsService ) {}

  ngOnInit(): void {
      this.contacts = this._contactService.getAll();
  }

  toggleList() {
    this.toggle = !this.toggle;
  }
}
