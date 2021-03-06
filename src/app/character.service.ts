import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.characters = database.list('characters');
 }

  getCharacters() {
    return this.characters;
  }

  addCharacter(newCharacter: Character){
    this.characters.push(newCharacter);
  }

  getCharacterById(characterId: string) {
  return this.database.object('characters/' + characterId);
   }

  updateCharacter(localUpdatedCharacter){
    var characterEntryInFirebase = this.getCharacterById(localUpdatedCharacter.$key);
    characterEntryInFirebase.update({name: localUpdatedCharacter.name,
                                    role: localUpdatedCharacter.role,
                                    bio: localUpdatedCharacter.bio});
  }

  deleteCharacter(localCharacterToDelete){
    var characterEntryInFirebase = this.getCharacterById(localCharacterToDelete.$key);
    characterEntryInFirebase.remove();
  }

}
