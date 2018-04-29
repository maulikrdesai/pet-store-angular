import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet, Category } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';
import { debug } from 'util';

@Component({
  selector: 'pet-editor',
  templateUrl: './pet-editor.component.html',
  styleUrls: ['./pet-editor.component.css']
})
export class PetEditorComponent implements OnInit {

  pet: Pet = {
    id: null
    , name: ""
    , category: null
    , photoUrls: []
    , status: "AVAILABLE"
  };

  categories: Category[] = [
    { id: 1, name: "Dog" }
    ,{ id: 2, name: "Cat" }
    ,{ id: 3, name: "Python" }];

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    if (id > 0)
      this.petService.getPet(id).subscribe(data => this.pet = data.result);
  }

  addImageUrl(imageUrl: string) {
    this.pet.photoUrls.unshift(imageUrl);
  }

  removeImageUrl(imageUrl: string) {
    this.pet.photoUrls = this.pet.photoUrls.filter(url => url != imageUrl);
  }

  savePet() {
    if (this.pet.id > 0)
      this.petService.updatePet(this.pet.id, this.pet).subscribe(data => this.pet = data.result);
    else
      this.petService.addPet(this.pet).subscribe(data => this.pet = data.result);
  }
}
