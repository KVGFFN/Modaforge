import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { loginHelper } from "src/app/loginHelper";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate
{
    isLoggedIn: boolean = false;
    constructor(private router: Router){}

    expectedRoute = ['/login','/register']
    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        this.isLoggedIn = await loginHelper.isLoggedIn;
        if (!this.isLoggedIn) {
            if (!this.expectedRoute.includes(route.routeConfig.path)) {
                this.router.navigate(['/register']);
            }
            return false;
        }
        return true;
    }
    

    
    
    
}