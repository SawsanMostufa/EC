import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/Admin/component/admin/My Profile/login/login.component';
import { HomeComponent } from './Component/User/user/component/Home/home/home.component';
import { NotFoundComponent } from './Component/User/user/component/Shared/not-found/not-found.component';

const routes: Routes = [
  // {}
      {path: '', component:HomeComponent },
      {path: 'home', component:HomeComponent },
      {path: 'admin',loadChildren: () => import('src/app/Component/Admin/component/admin/admin.module')
      .then(mod => mod.AdminModule)},
      {path: 'user',loadChildren: () => import('src/app/Component/User/user/user.module')
      .then(mod => mod.UserModule)},
      {path: 'shared',loadChildren: () => import('src/app/Component/Shared/shared/shared.module')
      .then(mod => mod.SharedModule)},
      {path: '**', component:NotFoundComponent },
    

    // {path: 'login', component:LoginComponent},
]; 
///shared/shop
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }