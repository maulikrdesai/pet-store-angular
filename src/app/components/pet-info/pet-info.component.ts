import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../models/pet.store.models';
import { PetService } from '../../services/pet.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet;
  selectedPhotoUrl: string;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private petService: PetService
    , private authService: AuthService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(
      data => {
        this.pet = data.result;
        if (this.pet.photoUrls && this.pet.photoUrls.length > 0)
          this.selectedPhotoUrl = this.pet.photoUrls[0]
      });
  }

  changeSelectedPhoto(selectedPhotoUrl: string) {
    this.selectedPhotoUrl = selectedPhotoUrl;
  }

  purchase() {
    this.petService.purchase(this.pet.id, this.pet).subscribe(data => this.pet = data.result);
  }

  return() {
    this.petService.return(this.pet.id, this.pet).subscribe(data => this.pet = data.result);
  }

  delete() {
    this.petService.deletePet(this.pet.id).subscribe(data => this.router.navigateByUrl("/pets"));
  }
}
