import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setUser(user)
  {
    const users = this.getUsers() || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsers()
  {
    const users = localStorage.getItem('users');
    return JSON.parse(users);
  }

  setUsers(users)
  {
    localStorage.setItem('users', JSON.stringify(users));
  }

  setIsLoggedIn()
  {
    localStorage.setItem('is_logged_in', 'yes');
  }

  getIsLoggedIn()
  {
    return localStorage.getItem('is_logged_in');
  }

  removeIsLoggedIn()
  {
    localStorage.removeItem('is_logged_in');
  }

}
