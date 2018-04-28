import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../services/api-gateway.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../models/pet.store.models';

@Component({
  selector: 'pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet;

  constructor(private route: ActivatedRoute
    , private apiGateway: ApiGatewayService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.apiGateway.getPet(id).subscribe(data => this.pet = data.result);
  }

}
