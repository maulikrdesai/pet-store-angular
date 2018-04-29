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

  pet: Pet;
  categories: Category[] = AvailableCategories;
  selectedCategoryId: number;

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    this.pet = new Pet();
    let id: number = +this.route.snapshot.paramMap.get('id');
    if (id > 0)
      this.petService.getPet(id).subscribe(data => this.initializeView(data.result));
  }

  initializeView(pet: Pet) {
    this.pet = pet;
    if (this.pet.category)
      this.selectedCategoryId = this.pet.category.id;
  }

  savePet() {
    this.pet.category = this.selectedCategory();
    if (this.pet.id > 0)
      this.petService.updatePet(this.pet.id, this.pet).subscribe(data => this.initializeView(data.result));
    else
      this.petService.addPet(this.pet).subscribe(data => this.initializeView(data.result));
  }

  selectedCategory(): Category {
    let matches: Category[] = this.categories.filter(category => category.id == this.selectedCategoryId);
    if (matches.length > 0)
      return matches[0];
    return null;
  }

  addImageUrl(imageUrl: string): void {
    this.pet.photoUrls.unshift(imageUrl);
  }

  removeImageUrl(imageUrl: string): void {
    this.pet.photoUrls = this.pet.photoUrls.filter(url => url != imageUrl);
  }

  addTag(tagName: string): void {
    this.pet.tags.unshift({ id: null, name: tagName });
  }

  removeTag(tagName: string): void {
    this.pet.tags = this.pet.tags.filter(tag => tag.name != tagName);
  }

}
