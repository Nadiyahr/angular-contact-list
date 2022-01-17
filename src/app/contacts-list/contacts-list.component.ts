import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @HostBinding('class') classess = 'table is-narrow is-hoverable is-fullwidth';

  @Input() contacts: Contact[] = [];
  @Input() toggle: boolean = true;

  @Output() contactSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() contactReove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectContact(id: number) {
    this.contactSelected.emit(id);
  }

  removeContact(id: number) {
    this.contactReove.emit(id);
  }

}
