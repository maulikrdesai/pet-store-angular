import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService
    , private router: Router
    ,private alertService:AlertService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(
      data => {
        this.pets = data.result;
        this.initializeView();
      });
  }

  initializeView(): void {
    if (this.pets.length == 0) {
      this.alertService.warn("No pet available in the store. Force navigation to add-pet page.")
      this.router.navigateByUrl("add-pet");
    }
  }

  onPetDeleted(deletedPet: Pet): void {
    this.pets = this.pets.filter(pet => pet.id != deletedPet.id);
    console.log(deletedPet.name + "[" + deletedPet.id + "] is no longer exists.");
    this.initializeView();
  }

  onPetSold(soldPet: Pet): void {
    console.log(soldPet.name + "[" + soldPet.id + "] has been sold.");
  }

  onPetReturned(returnedPet: Pet): void {
    console.log(returnedPet.name + "[" + returnedPet.id + "] has been returned.");
  }
}
