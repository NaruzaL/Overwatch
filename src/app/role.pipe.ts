import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './character.model';
import { CharacterService } from './character.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {
  characters: FirebaseListObservable<any[]>;

  transform(characters, filterByRole){
    var output: Character[] = [];
    if(filterByRole === "allCharacters"){
      return characters;
    }
    else if (filterByRole === "offense"){
      for (var i = 0; i < characters.length; i++){
        if (characters[i].role === "Offense"){
          output.push(characters[i]);
        }
      }
      return output;
    }
    else if (filterByRole === "defense"){
      for (var i = 0; i < characters.length; i++){
        if (characters[i].role === "Defense"){
          output.push(characters[i]);
        }
      }
      return output;
    }
    else if (filterByRole === "tank"){
      for (var i = 0; i < characters.length; i++){
        if (characters[i].role === "Tank"){
          output.push(characters[i]);
        }
      }
      return output;
    }
    else if (filterByRole === "support"){
      for (var i = 0; i < characters.length; i++){
        if (characters[i].role === "Support"){
          output.push(characters[i]);
        }
      }
      return output;
    }
  }

}
