import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BuyComponent } from './buy/buy.component';
import { LibraryDashComponent } from './library-dash/library-dash.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

<<<<<<< HEAD
const routes: Routes = [
 {path:'',redirectTo:'user',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'dashboard',component:LibraryDashComponent},
 {path:'user',component:UserComponent},
 {path:'admin',component:AdminLoginComponent},
 {path:'buy',component:BuyComponent}

=======
const routes: Routes = [ 
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'dashboard',component:LibraryDashComponent}
>>>>>>> bc41583a9cfe91986ce9aed2714d8c3c385149e4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
