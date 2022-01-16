import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list-of-contacts',
  templateUrl: './list-of-contacts.component.html',
  styleUrls: ['./list-of-contacts.component.css']
})
export class ListOfContactsComponent implements OnInit {
  @Input() contact!: Contact;
  

  ngOnInit(): void {
  }
}
