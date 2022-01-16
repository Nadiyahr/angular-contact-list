import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService { 

  private contacts: Contact[] = [
    {"id":1,"name":"Chuck Norris","email":"borodach@com.ua","phone":"(097)987-6541"},
    {"id":2,"name":"Jackie Chan","email":"jackie.chan@com.ua","phone":"(063)555-5555"},
    {"id":10,"name":"Leanne Graham","email":"Sincere@april.biz","phone":null},];

  getContacts = localStorage.getItem('contacts');
  

  private localContacts?: Contact[] = this.getContacts ? JSON.parse(this.getContacts) : this.contacts 

  constructor() { }

  getAll() {
    return this.localContacts;
  }

  remove(id: number) {
    this.localContacts = this.localContacts?.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.localContacts));
  }

  add(newContact: Contact) {
    this.localContacts?.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(this.localContacts))
  }

  select(id: number) {
    return this.localContacts?.find(contact => contact.id === id)
  }

  filter(value: string) {
    this.localContacts = this.localContacts?.filter(contact => contact.name.toLowerCase().includes(value)
    || contact.email.toLowerCase().includes(value));
    return this.localContacts;
  }
}
