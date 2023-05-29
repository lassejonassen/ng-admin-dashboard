import { Injectable } from '@angular/core';
import { UserSettings } from '../models/user-settings.model';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '../models/constants';

const DEFAULT_USER_SETTINGS: UserSettings = {
  language: 'en',
};

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  private _userSettings = new BehaviorSubject<UserSettings>(
    DEFAULT_USER_SETTINGS
  );
  readonly userSettings$ = this._userSettings.asObservable();

  constructor() {
    this.get();
  }

  private get(): void {
    const savedSettings = localStorage.getItem(
      Constants.LOCAL_STORAGE_USER_SETTINGS_KEY
    );

    if (savedSettings) {
      this._userSettings.next({
        ...DEFAULT_USER_SETTINGS,
        ...JSON.parse(savedSettings),
      });
    } else {
      this._userSettings.next(DEFAULT_USER_SETTINGS);
    }
  }

  private set(userSettings: UserSettings): void {
    userSettings = { ...this._userSettings.value, ...userSettings };
    localStorage.setItem(
      Constants.LOCAL_STORAGE_USER_SETTINGS_KEY,
      JSON.stringify(userSettings)
    );
    this._userSettings.next(userSettings);
  }

  setLanguage(language: string): void {
    const settings = this._userSettings.value;
    settings.language = language;
    this.set(settings);
  }
}
