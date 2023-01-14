import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { loginHelper } from "src/app/loginHelper";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate
{
    isLoggedIn: boolean = false;
    constructor
    (
        private authService: AuthService,
        private router: Router
    )
    {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean
    {
        const expectedRoute = ['/login','/register'];
        if (!loginHelper.isLoggedIn)
        {
            if (!expectedRoute.includes(route.routeConfig.path))
            {
                this.router.navigate(['/register']);
                return false;
            }
        }
        return true;
    }
    
    
}