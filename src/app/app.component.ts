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
  nameControl: FormControl = new FormControl;
  newContact!: FormGroup;

  constructor(private _contactService: ContactsService ) {}

  ngOnInit(): void {
    this.contacts = this._contactService.getAll();
    // this.selectedContact = 
    // this.newContact = new FormControl('John', [Validators.required, Validators.minLength(5)]);
    // this.newContact.valueChanges.subscribe(val => console.log(val));
    // this.newContact.statusChanges.subscribe(status => console.log(status));
    this.newContact = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    })
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

  // addName(name: string) {
  //   if (!name) {
  //     return;
  //   }

  //   this.newContact.name = name;
  // }
}
