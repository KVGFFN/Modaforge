import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { loginHelper } from "src/app/loginHelper";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate
{
    isLoggedIn: boolean = false;
    app = initializeApp(environment.firebaseConfig);
    analytics = getAnalytics(this.app);
    auth = getAuth(this.app);

    constructor(private router: Router){}

    expectedRoute = ['/login','/register']
    // async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    //     await loginHelper.isLoggedIn;
    //     this.isLoggedIn = await loginHelper.isLoggedIn;
    //     if (!this.isLoggedIn) {
    //         if (!this.expectedRoute.includes(route.routeConfig.path)) {
    //             this.router.navigate(['/register']);
    //         }
    //         return false;
    //     }
    //     return true;
    // }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.auth.onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    // ...
                    console.log("%c" + "CANACTIVATE: User Found!", "color: yellow")
                    resolve(true);
                } else {
                    // User is signed out
                    // ...
                    console.log("%c" + "CANACTIVATE: User not found!", "color: yellow")
                    resolve(false);
                }
            });
        });
    }
}