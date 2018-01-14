import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {

  // @Output() featureSelected = new EventEmitter<string>();

  // OnSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor (private fb: FirebaseService) {

  }

  onSaveData() {
    this.fb.storeRecipes()
    .subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.fb.getRecipes();
    console.log('Recipes fetched');
  }

}
