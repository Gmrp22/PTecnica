import { Injectable } from '@angular/core';
import { Notify, Report, Confirm, Loading, Block } from 'notiflix';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  success(message: string) {
    Notify.success(message, { timeout: 2500 });
  }

  error(message: string) {
    Notify.failure(message, { timeout: 2500 });
  }
}
