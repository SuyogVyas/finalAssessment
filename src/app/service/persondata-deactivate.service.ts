import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PersonComponent } from "../person/person.component";


@Injectable()
export class PersonCanDeactivateGuard implements CanDeactivate<PersonComponent>{
    constructor(){}
    canDeactivate(component: PersonComponent):boolean{
       if(component.personform.dirty)
       {
        return confirm('Are you sure you want to discard your changes?.')
       }
       else{
        return true;
       }
       
    }

}