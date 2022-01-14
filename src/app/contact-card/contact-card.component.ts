import { Component, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contacts.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() selectedContact?: Contact;

  ngOnInit(): void {
  }
}
