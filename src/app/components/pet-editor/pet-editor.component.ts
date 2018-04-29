import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'pet-editor',
  templateUrl: './pet-editor.component.html',
  styleUrls: ['./pet-editor.component.css']
})
export class PetEditorComponent implements OnInit {

  pet: Pet;

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    if (id > 0)
      this.petService.getPet(id).subscribe(data => this.pet = data.result);
  }

  save() {
    this.petService.updatePet(this.pet).subscribe(data => this.pet = data.result);
  }
}
