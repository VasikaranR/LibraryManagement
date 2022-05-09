import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BuyComponent } from './buy/buy.component';
import { LibraryDashComponent } from './library-dash/library-dash.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path:'',redirectTo:'user',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'dashboard',component:LibraryDashComponent},
 {path:'user',component:UserComponent},
 {path:'admin',component:AdminLoginComponent},
 {path:'buy',component:BuyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
