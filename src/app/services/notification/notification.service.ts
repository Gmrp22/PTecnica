import { Injectable } from '@angular/core';
import { Notify, Report, Confirm, Loading, Block } from 'notiflix';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  observable: Observable<any>;

  constructor() {
    this.observable = new Observable((subscriber) => { 
      subscriber.next("Estas suscrito")
    }
    
    )
  }

  success(message: string) {
    Notify.success(message, { timeout: 2500 });
  }

  error(message: string) {
    Notify.failure(message, { timeout: 2500 });
  }
}
