import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CharacterService]
})
export class AdminComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, bio: string) {
  var newCharacter: Character = new Character(name, role, bio);
  this.characterService.addCharacter(newCharacter);
  }

}
