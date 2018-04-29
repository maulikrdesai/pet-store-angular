import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  @Input()
  pet: Pet;
  @Output()
  deleted: EventEmitter<Pet> = new EventEmitter();
  @Output()
  sold: EventEmitter<Pet> = new EventEmitter();
  @Output()
  returned: EventEmitter<Pet> = new EventEmitter();

  constructor(private router: Router, private petService: PetService) { }

  ngOnInit() {
  }

  purchase() {
    this.pet.status = "SOLD";
    this.petService.updatePet(this.pet.id, this.pet).subscribe(
      data => {
        this.pet = data.result;
        this.sold.emit(this.pet);
      });
  }

  return() {
    this.pet.status = "AVAILABLE";
    this.petService.updatePet(this.pet.id, this.pet).subscribe(
      data => {
        this.pet = data.result;
        this.returned.emit(this.pet);
      });
  }

  delete() {
    this.petService.deletePet(this.pet.id).subscribe(data => this.deleted.emit(this.pet));
  }
}
