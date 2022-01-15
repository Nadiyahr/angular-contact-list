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
    {"id":3,"name":"Clementine Bauch","email":"Nathan@yesenia.net","phone":"1-463-123-4447"},
    {"id":4,"name":"Patricia Lebsack","email":"Julianne.OConner@kory.org","phone":"493-170-9623 x156"},
    {"id":5,"name":"Chelsey Dietrich","email":"Lucio_Hettinger@annie.ca","phone":"(254)954-1289"},
    {"id":6,"name":"Mrs. Dennis Schulist","email":"Karley_Dach@jasper.info","phone":"1-477-935-8478 x6430"},
    {"id":7,"name":"Kurtis Weissnat","email":"Telly.Hoeger@billy.biz","phone":"210.067.6132"},
    {"id":8,"name":"Nicholas Runolfsdottir V","email":"Sherwood@rosamond.me","phone":"586.493.6943 x140"},
    {"id":9,"name":"Glenna Reichert","email":"Chaim_McDermott@dana.io","phone":"(775)976-6794 x41206"},
    {"id":10,"name":"Leanne Graham","email":"Sincere@april.biz","phone":null},]

  constructor() { }

  getAll() {
    return this.contacts;
  }

  remove(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    return this.contacts;
  }

  add(newContact: Contact) {
    this.contacts.push(newContact)
  }

  select(id: number) {
    return this.contacts.find(contact => contact.id === id)
  }
}
