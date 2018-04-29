import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
    this.petService.getPets().subscribe(
      data => {
        this.pets = data.result;
        this.initializeView();
      });
  }

  initializeView() {
    if (this.pets.length == 0)
      this.router.navigateByUrl("add-pet");
  }

  onPetDeleted(deletedPet: Pet) {
    this.pets = this.pets.filter(pet => pet.id != deletedPet.id);
    this.initializeView();
    console.log(deletedPet.name + "[" + deletedPet.id + "] is no longer exists.");
  }

  onPetSold(soldPet: Pet) {
    console.log(soldPet.name + "[" + soldPet.id + "] has been sold.");
  }

  onPetReturned(returnedPet: Pet) {
    console.log(returnedPet.name + "[" + returnedPet.id + "] has been returned.");
  }
}
