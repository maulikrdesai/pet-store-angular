import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(data => this.pets = data.result);
  }

  onPetDeleted(deletedPet: Pet) {
    this.pets = this.pets.filter(pet => pet.id != deletedPet.id);
    console.log(deletedPet.name +"["+ deletedPet.id +"] is no longer exists.");
  }

  onPetSold(soldPet: Pet) {
    console.log(soldPet.name +"["+ soldPet.id +"] has been sold.");
  }

  onPetReturned(returnedPet: Pet) {
    console.log(returnedPet.name +"["+ returnedPet.id +"] has been returned.");
  }
}