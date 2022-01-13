import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../app.component';

@Component({
  selector: 'app-list-of-contacts',
  templateUrl: './list-of-contacts.component.html',
  styleUrls: ['./list-of-contacts.component.css']
})
export class ListOfContactsComponent implements OnInit {
  @Input() contact!: Contact;

  ngOnInit(): void {
  }

  loadContact() {

  }

  getInfo() {
    return 'This is my info'
  }
}
