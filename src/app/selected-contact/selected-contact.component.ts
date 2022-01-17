import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contacts.service';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.css']
})
export class SelectedContactComponent implements OnInit {
  @Input() selectedContact!: Contact;
  @Input() toggle: boolean = false;

  @Output() listToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleList() {
    this.listToggle.emit();
  }

}
