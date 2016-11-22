import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,
         RouterStateSnapshot, CanActivateChild, NavigationExtras,
         CanLoad, Route
        } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("----route----");
        console.log(route.data['test']);
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        console.log(this.authService.isLoggedIn);
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;

        let sessionId = 123456789;
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId},
            fragment: 'anchor'
        };
        this.router.navigate(['/login'], navigationExtras);
        return false;
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.checkLogin(url);
    }
}