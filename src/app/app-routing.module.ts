import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { PersonCanDeactivateGuard } from './service/persondata-deactivate.service';


const routes: Routes = [
  {path:'person',component:PersonComponent,canDeactivate:[PersonCanDeactivateGuard]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'person',pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
