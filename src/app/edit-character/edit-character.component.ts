import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css'],
  providers: [CharacterService]
})

export class EditCharacterComponent implements OnInit {
  @Input() selectedCharacter;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  beginUpdatingCharacter(characterToUpdate) {
    this.characterService.updateCharacter(characterToUpdate);
  }

  beginDeletingCharacter(characterToDelete) {
    if(confirm("Are you sure you want to delete this character?")) {
      this.characterService.deleteCharacter(characterToDelete);
    }
  }

}
