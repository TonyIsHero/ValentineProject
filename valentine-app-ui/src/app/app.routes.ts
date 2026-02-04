import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'auth',
        pathMatch:'full',
    },
    {
        path:'auth',
        component:AuthComponent
    },
    {
        path:'home',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
    }
];
