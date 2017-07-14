import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
    characters: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  addCharacter(newCharacter: Character) {
  this.characters.push(newCharacter);
  }

  getRole(character: Character) {
    if (character.role === "Support") {
      return "bg-success";
    }
    else if (character.role === "Tank"){
      return "bg-info";
    }
    else if (character.role === "Defense"){
      return "bg-warning";
    }
    else {
      return "bg-danger";
    }
  }

  seeCharDetail(clickedCharacter) {
    this.router.navigate(['character', clickedCharacter.$key]);
  }

}
