import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact, ContactsService } from './contacts.service';
import { filter, map, Observable, startWith } from 'rxjs';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contact-list';
  value?: any;
  toggle = true;
  contacts?: Contact[];
  selectedContact?: Contact;
  searchContact = new FormControl();
  filterOptions?: Observable<string>
  newContact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
  }); 

  constructor(private _contactService: ContactsService ) {}

  ngOnInit() {
    this.contacts = this._contactService.getAll() || this._contactService.filter(this.value);
    console.log(this.filterOptions);

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

  onSearch(e: any) {
    this.value = e.target.value.toLowerCase();
    console.log(e);
    console.log(this.filterOptions);
    this.contacts = this._contactService.filter(this.value);
    // if (this.value === '') {
    //   this.contacts = this._contactService.getAll();
    // }
  }
}
