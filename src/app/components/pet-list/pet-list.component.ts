import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../services/api-gateway.service';
import { Pet } from '../../models/pet.store.models';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private apiGateway: ApiGatewayService) { }

  ngOnInit() {
    this.apiGateway.getPets().subscribe(data => this.pets = data.result);
  }
}
