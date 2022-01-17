import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'contact list';

  constructor() { }

  ngOnInit(): void {
  }

  handelInput(value: string) {
    // const value = event.target.value;
    this.title = value;
  }

  cangeHandler() {
    console.log(this.title);
    
  }

}
