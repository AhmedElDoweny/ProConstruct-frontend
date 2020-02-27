import {ClientService} from 'src/app/_service/client.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private clientSer: ClientService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.clientSer.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      this.clientSer.removeToken();
      return false;
    }
    
    return true;
  //   if(this.clientSer.isLoggedIn()){
  //     if(this.clientSer.getUserPayload().role === "superAdmin"){
  //       return true
  //     }
  //     else if(this.clientSer.getUserPayload().role === "Engineer" || this.clientSer.getUserPayload().role === "sProvider"){
  //       return true
  //     }
  //   }
  // else{
  //     this.router.navigateByUrl('/login');
  //     this.clientSer.removeToken();
  //     return false;
  // }
    
    
  }


}
