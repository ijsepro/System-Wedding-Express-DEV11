import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './candiate/sidebar/sidebar.module';
import { FooterModule } from './candiate/shared/footer/footer.module';
import { NavbarModule} from './candiate/shared/navbar/navbar.module';
import { FixedPluginModule} from './candiate/shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './candiate/dashboard/dashboard.component';
import { UserComponent }   from './candiate/user/user.component';
import { TableComponent }   from './candiate/table/table.component';
import { IconsComponent }   from './candiate/icons/icons.component';
import { MapsComponent }   from './candiate/maps/maps.component';
import { NotificationsComponent }   from './candiate/notifications/notifications.component';
import { UpgradeComponent }   from './candiate/upgrade/upgrade.component';
import { VendorsComponent } from './candiate/vendors/vendors.component';
import { TestComponent } from './candiate/test/test.component';
import {AccSettingsComponent} from "./candiate/acc-settings/acc-settings.component";
import { MessegesComponent } from './candiate/messeges/messeges.component';
import { WeddingFeedsComponent } from './candiate/wedding-feeds/wedding-feeds.component';
import { AppoinmentsComponent } from './candiate/appoinments/appoinments.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    VendorsComponent,
    AccSettingsComponent,
    TestComponent,
    MessegesComponent,
    WeddingFeedsComponent,
    AppoinmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    FormsModule,
    // ReactiveFormsModule,
    // FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
