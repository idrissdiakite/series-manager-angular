import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: BehaviorSubject<boolean>;

  constructor(private userService: UserService) { 
    this.isAuth = new BehaviorSubject<boolean>(false);
  }

    /**
   * Method for connect the user
   * @param login
   * @param password
   */
  signIn(login: string, password: string): Promise<void | string> {
    return new Promise<void | string>((res, rej) => {
        if (login ==='Administrator' && password === 'azerty') {
          this.isAuth.next(true);
          res();
        }
        else {
          rej('Les identifiants ne sont pas corrects');
        }
    });
  }

/**
   * Method for disconnect the user
   */
  signOut() {

    return new Promise<void | string>((res, rej) => {

      setTimeout(() => {
        this.isAuth.next(false);
        res();
      }, 1000);

    });
  }
}