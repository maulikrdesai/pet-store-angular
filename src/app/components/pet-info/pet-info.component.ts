import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet;

  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(data => this.pet = data.result);
  }

  purchase() {
    this.pet.status = "SOLD";
    this.petService.updatePet(this.pet).subscribe(data => this.pet = data.result);
  }

  return() {
    this.pet.status = "AVAILABLE";
    this.petService.updatePet(this.pet).subscribe(data => this.pet = data.result);
  }

  delete() {
    this.petService.deletePet(this.pet.id).subscribe(data => this.router.navigateByUrl("/pets"));
  }
}
