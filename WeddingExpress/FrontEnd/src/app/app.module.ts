

import { VendorSignupService } from './services/vendor-signup.service';
import { HomeComponent } from './login/home/home.component';
import { UserdetailService } from './services/userdetail.service';
import { VendordetailService } from './services/vendordetail.service';
import { LogInServiceService } from './services/login.service.service';
import { ApponimentService } from './services/apponiment.service';
import { AppErrorHandler } from './common/app-error-handler';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatTableModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule , MatNativeDateModule,MatToolbarModule,MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './candidate/user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupServiceService } from './services/signup-service.service';
import { VendorServiceService } from './services/vendor.service';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';
import { UserDashboardComponent } from './candidate/user-dashboard/user-dashboard.component';
import { BudgetCalculatorComponent } from './candidate/appoinment/budget-calculator/budget-calculator.component';
// import { BudgetCalculatorComponent } from './candidate/budget-calculator/budget-calculator.component';
// import {BudgetCalculatorComponent} from '.\candidate\appoinment\budget-calculator.component';
import { VendorDashboardComponent } from './business/vendor-dashboard/vendor-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AppoinmentComponent } from './candidate/appoinment/appoinment.component';
import { VendorLoginComponent } from './business/vendor-login/vendor-login.component';

// import {MatTableModule} from '@angular/material/table';
import { AccSettingsComponent } from './candidate/acc-settings/acc-settings.component';
import { DeleteAccComponent } from './candidate/delete-acc/delete-acc.component';

// import { AgmCoreModule } from '@agm/core';
import { VendorSignupComponent } from './business/vendor-signup/vendor-signup.component';
import {AccountsettingsService} from "./services/accountsettings.service";
import { MessageComponent } from './message/message.component';

import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { SalonComponent } from './salon/salon.component';
import { OhasaComponent } from './salon/ohasa/ohasa.component';
import { VenusComponent } from './salon/venus/venus.component';
import { BonitaComponent } from './salon/bonita/bonita.component';
import { VenuesComponent } from './venues/venues.component';
import { HiltonComponent } from './venues/hilton/hilton.component';
import { FloristsComponent } from './florists/florists.component';
import { LassanaFloraComponent } from './florists/lassana-flora/lassana-flora.component';
import { WeddingFloraComponent } from './florists/wedding-flora/wedding-flora.component';
import { ManaharaComponent } from './florists/manahara/manahara.component';
import { GaladariComponent } from './venues/galadari/galadari.component';
import { AmariComponent } from './venues/amari/amari.component';
import { ShangrilaComponent } from './venues/shangrila/shangrila.component';
import { OriencoComponent } from './venues/orienco/orienco.component';
import { AvenraComponent } from './venues/avenra/avenra.component';
import { BreezComponent } from './venues/breez/breez.component';
import { CrescentFloraComponent } from './florists/crescent-flora/crescent-flora.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { RehanComponent } from './photographers/rehan/rehan.component';
import { CrystalFloraComponent } from './florists/crystal-flora/crystal-flora.component';
import { ClickComponent } from './photographers/click/click.component';
import { BestComponent } from './photographers/best/best.component';
import { WhiteComponent } from './venues/white/white.component';
import { HeavenComponent } from './venues/heaven/heaven.component';
import { MaheshManneppurumaComponent } from './photographers/mahesh-manneppuruma/mahesh-manneppuruma.component';
import { EweuniComponent } from './salon/eweuni/eweuni.component';
import { MusicComponent } from './music/music.component';
import { Dj1Component } from './music/dj1/dj1.component';
import { GaneeshanComponent } from './photographers/ganeeshan/ganeeshan.component';
import { Dj2Component } from './music/dj2/dj2.component';
import { MarsComponent } from './salon/mars/mars.component';
import { VDashboardComponent } from './business/v-dashboard/v-dashboard.component';
import { PhotosComponent } from './photographers/photos/photos.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    BudgetCalculatorComponent ,
    VendorDashboardComponent,
    FooterComponent,
    AppoinmentComponent,
    VendorLoginComponent,
    AccSettingsComponent,
    DeleteAccComponent,
    VendorSignupComponent,
    MessageComponent,
    VendorProfileComponent,
    SalonComponent,
    OhasaComponent,
    VenusComponent,
    BonitaComponent,
    VenuesComponent,
    HiltonComponent,
    FloristsComponent,
    LassanaFloraComponent,
    WeddingFloraComponent,
    ManaharaComponent,
    GaladariComponent,
    AmariComponent,
    ShangrilaComponent,
    OriencoComponent,
    CrescentFloraComponent,
    PhotographersComponent,
    RehanComponent,
    CrystalFloraComponent,
    AvenraComponent,
    ClickComponent,
    BestComponent,
    BreezComponent,
    WhiteComponent,
    HeavenComponent,
    MaheshManneppurumaComponent,
    EweuniComponent,
    MusicComponent,
    Dj1Component,
    GaneeshanComponent,
    Dj2Component,
    MarsComponent,
    VDashboardComponent,
    PhotosComponent,
    AdminComponent


  ],
  exports: [ MatTableModule , MatButtonModule, MatDialogModule ],
  entryComponents: [
    AppoinmentComponent,
    AccSettingsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDz3cM9XMBuNHJW6IJYFRr2HY_c8OmSi2Y&callback=initMap'
    // }),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'user', component: UserComponent},
      {path: 'vendor', component: VDashboardComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'user-dashboard', component: UserDashboardComponent},
      {path: 'budget-cal', component: BudgetCalculatorComponent},
      {path: 'vendor-login', component: VendorLoginComponent},
      {path: 'vendor-dashboard', component: VendorDashboardComponent},
      {path: 'vendor-signup' ,component:VendorSignupComponent},
      {path: 'acc-settings', component: AccSettingsComponent},
      {path: 'acc', component: DeleteAccComponent},
       {path: 'message', component: MessageComponent},
         {path: 'vendor profile', component: VendorProfileComponent},
         {path: 'salon', component: SalonComponent},
         {path: 'salon-ohasa', component: OhasaComponent},
         {path: 'salon-venus', component: VenusComponent},
         {path: 'bonita', component: BonitaComponent},
         {path: 'venues',component:VenuesComponent},
         {path: 'hilton',component:HiltonComponent},
         {path: 'florists', component: FloristsComponent},
         {path: 'lassana-flora', component: LassanaFloraComponent},
         {path: 'wedding-flora', component: WeddingFloraComponent},
         {path: 'manahara-flora', component: ManaharaComponent},
         {path: 'galadari' , component:GaladariComponent},
         {path: 'amari',component:AmariComponent},
         {path: 'shangrila',component:ShangrilaComponent},
         {path: 'orienco',component:OriencoComponent},
         {path: 'crescent-flora', component: CrescentFloraComponent},
         {path: 'photo', component: PhotographersComponent},
         {path: 'rehan', component: RehanComponent},
         {path: 'crystal-flora', component: CrystalFloraComponent},
         {path: 'breez',component:BreezComponent},
        {path: 'best', component: BestComponent},
         {path: 'avenra',component:AvenraComponent},
         {path: 'click', component: ClickComponent},
         {path: 'white',component:WhiteComponent},
         {path: 'heaven',component:HeavenComponent},
         {path: 'ewe' , component:EweuniComponent},
         {path: 'mahesh' , component:MaheshManneppurumaComponent},
         {path: 'music' , component:MusicComponent},
         {path: 'dj1' ,component:Dj1Component},
         {path: 'geeshan' , component:GaneeshanComponent},
         {path:'dj2',component:Dj2Component},
         {path: 'mars' , component:MarsComponent},
         {path: 'foto' , component:PhotosComponent},
           {path: 'admin' , component:AdminComponent},


    ]),
    
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,

    MatCheckboxModule, MatButtonModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,
    MatInputModule 
  ],
  providers: [
    SignupServiceService,
    LogInServiceService,
    UserdetailService,
    ApponimentService,
    VendorServiceService,
    VendorSignupService,
    VendordetailService,
    { provide: ApponimentService, useClass: ApponimentService},
    { provide: ErrorHandler, useClass: AppErrorHandler},
    { provide: AccountsettingsService, useClass: AccountsettingsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
