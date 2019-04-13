import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {LocalstorageService} from '../localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate{

  constructor(private router: Router, private ls: LocalstorageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    if (!this.ls.getIsLoggedIn()) {
        return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }

}
