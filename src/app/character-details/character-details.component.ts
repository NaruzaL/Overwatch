import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: [CharacterService]
})

export class CharacterDetailsComponent implements OnInit {
  characterId: string;
  characterToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private characterService: CharacterService) {}

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
      });
    this.characterToDisplay = this.characterService.getCharacterById(this.characterId);
    console.log(this.characterToDisplay.name)
  }

}
