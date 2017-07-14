import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
  }

  seeCharDetail(clickedCharacter: Character) {
    this.router.navigate(['character', clickedCharacter.id]);
  }

}
