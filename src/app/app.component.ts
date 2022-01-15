import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  nameControl: FormControl = new FormControl('');
  newContact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
  });

  constructor(private _contactService: ContactsService ) {}

  ngOnInit(): void {
    this.contacts = this._contactService.getAll();
  }

  toggleList() {
    this.toggle = !this.toggle;
  }

  removeContact(id: number) {
    this._contactService.remove(id);
    this.contacts = this._contactService.getAll();
  }

  selectContact(id: number) {
    this.selectedContact = this._contactService.select(id);
    this.toggleList();
  }

  onSubmit() {
    console.warn(this.newContact.valid)

    const value = this.newContact.value;
    const newId = this.contacts ? this.contacts.length + 1 : 0;
    const cont = {id: newId, ...value};
    this._contactService.add(cont);
    this.contacts = this._contactService.getAll();
    this.newContact.reset();
  }
}
