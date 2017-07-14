import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [CharacterService]
})

export class CharacterDetailsComponent implements OnInit {
  characterId: string;
  characterToDisplay;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
      });
    this.characterToDisplay = this.characterService.getCharacterById(this.characterId);
  }

}
