import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Nino", "Donchi", "donchinino@gmail.com", 50000),
    new SalesPerson("Donald", "Donchi", "donchidonald@gmail.com", 40000),
    new SalesPerson("Epiphanie", "Donchi", "donchiepiphanie@gmail.com", 90000),
    new SalesPerson("Gaistelle", "Donchi", "donchigaistelle@gmail.com", 60000)
  ]

}
