// sauce.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SauceService {
  private mSauce$ = new BehaviorSubject<string>('initial sauce');

  constructor() {}

  sauce$(): Observable<string> {
    return this.mSauce$;
  }

  setSauce(sauce: string) {
    this.mSauce$.next(sauce);
  }
}
