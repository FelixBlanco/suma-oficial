import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-servicios',
  templateUrl: './card-servicios.component.html',
  styleUrls: ['./card-servicios.component.scss']
})
export class CardServiciosComponent implements OnInit {

  @Input() servicio : any = []

  constructor() { }

  ngOnInit(): void {
  }

}
