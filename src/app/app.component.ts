import { Component } from '@angular/core';



export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string | null;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-list';

  toggle = true;

  contacts: Contact[] = [
    {"id":1,"name":"Chuck Norris","email":"borodach@com.ua","phone":"(097)987-6541"},
    {"id":2,"name":"Jackie Chan","email":"jackie.chan@com.ua","phone":"(063)555-5555"},
    {"id":3,"name":"Clementine Bauch","email":"Nathan@yesenia.net","phone":"1-463-123-4447"},
    {"id":4,"name":"Patricia Lebsack","email":"Julianne.OConner@kory.org","phone":"493-170-9623 x156"},
    {"id":5,"name":"Chelsey Dietrich","email":"Lucio_Hettinger@annie.ca","phone":"(254)954-1289"},
    {"id":6,"name":"Mrs. Dennis Schulist","email":"Karley_Dach@jasper.info","phone":"1-477-935-8478 x6430"},
    {"id":7,"name":"Kurtis Weissnat","email":"Telly.Hoeger@billy.biz","phone":"210.067.6132"},
    {"id":8,"name":"Nicholas Runolfsdottir V","email":"Sherwood@rosamond.me","phone":"586.493.6943 x140"},
    {"id":9,"name":"Glenna Reichert","email":"Chaim_McDermott@dana.io","phone":"(775)976-6794 x41206"},
    {"id":10,"name":"Leanne Graham","email":"Sincere@april.biz","phone":"1-770-736-8031 x56442"},
    {"id":196,"name":"Alex","email":"alexii.ivannikov@gmail.com","phone":"344556677"},
    {"id":437,"name":"Galina Lozinska","email":"galinkalozinska@gmail.com","phone":"0967784857"},
    {"id":461,"name":"Sasha","email":"mate@example.com","phone":"1234567890"},
    {"id":1193,"name":"Eugene","email":"example@mate-academy.com","phone":"2371834738"},
    {"id":1245,"name":"Vitalii Strohush","email":"mygmail@gmail.com","phone":"1234567890"},
    {"id":1250,"name":"snezhana","email":"lenur29azizov@gmail.com","phone":"0"},
    {"id":1251,"name":"anastasia fiflipovna","email":"nastasya@gmail.com","phone":"11223344"},
    {"id":1252,"name":"Vincent Vega","email":"vincent@gmail.com","phone":"911"},
    {"id":1849,"name":"Lenur","email":"lenur29azizov@gmail.com","phone":null},
    {"id":1850,"name":"Lenur","email":"lenur29azizov@gmail.com","phone":null},
    {"id":2141,"name":"paul mcartney","email":"someemail","phone":null},
    {"id":2142,"name":"ringo star","email":"ringy@boy.com","phone":null},
    {"id":2146,"name":"Ricardo vilalobos","email":"ricardo@vivlalobos","phone":null},
    {"id":2147,"name":"Vasiliy","email":"pupkin@io.bp","phone":"+3333  5 6 7"},
    {"id":2150,"name":"Scrooge McDuck","email":"sdf@dsf.sdf","phone":""}]

  toggleList() {
    this.toggle = !this.toggle;
  }
}
