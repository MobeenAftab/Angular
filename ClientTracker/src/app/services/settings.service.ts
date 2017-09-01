import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {

  settings: Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }

  constructor() {
    if (localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings = {
      allowRegistration: this.settings.allowRegistration,
      disableBalanceOnAdd: this.settings.disableBalanceOnAdd,
      disableBalanceOnEdit: this.settings.disableBalanceOnEdit
    }
  }

  changeSettings(settings: Settings) {
      this.settings = settings = {
      allowRegistration: settings.allowRegistration,
      disableBalanceOnAdd: settings.disableBalanceOnAdd,
      disableBalanceOnEdit: settings.disableBalanceOnEdit
    }
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
