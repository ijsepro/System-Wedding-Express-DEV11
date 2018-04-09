import { Routes } from '@angular/router';
import { DashboardComponent }   from './candiate/dashboard/dashboard.component';
import { UserComponent }   from './candiate/user/user.component';
import { IconsComponent }   from './candiate/icons/icons.component';
import {AccSettingsComponent} from "./candiate/acc-settings/acc-settings.component";
import {MessegesComponent} from "./candiate/messeges/messeges.component";
import {VendorsComponent} from "./candiate/vendors/vendors.component";
import {AppoinmentsComponent} from "./candiate/appoinments/appoinments.component";

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'messeges', component: MessegesComponent },
    { path: 'acc-settings', component: AccSettingsComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'appoinments', component: AppoinmentsComponent },
    { path: 'vendors', component: VendorsComponent }
]
