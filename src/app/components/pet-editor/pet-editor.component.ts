import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet, Category, AvailableCategories } from '../../models/pet.store.models';
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
    , name: null
    , category: null
    , photoUrls: []
    , status: "AVAILABLE"
    , tags: []
  };
  categories:Category[] = AvailableCategories;
  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    if (id > 0)
      this.petService.getPet(id).subscribe(data => this.pet = data.result);
  }

  addImageUrl(imageUrl: string) {
    console.log("Adding Tag:" + imageUrl);
    this.pet.photoUrls.unshift(imageUrl);
  }

  removeImageUrl(imageUrl: string) {
    console.log("Removeing Tag:" + imageUrl);
    this.pet.photoUrls = this.pet.photoUrls.filter(url => url != imageUrl);
  }

  addTag(tagName: string) {
    console.log("Adding Tag:" + tagName);
    this.pet.tags.unshift({id:null, name:tagName});
  }

  removeTag(tagName: string) {
    console.log("Removeing Tag:" + tagName);
    this.pet.tags = this.pet.tags.filter(tag => tag.name != tagName);
  }

  savePet() {
    if (this.pet.id > 0)
      this.petService.updatePet(this.pet.id, this.pet).subscribe(data => this.pet = data.result);
    else
      this.petService.addPet(this.pet).subscribe(data => this.pet = data.result);
  }
}
