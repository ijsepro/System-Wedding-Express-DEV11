import { UserdetailService } from './services/userdetail.service';
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
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule , MatNativeDateModule} from '@angular/material';

import { CommonModule } from '@angular/common';
// import { MatTableModule, MatToolbarModule } from '@angular/material';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './candidate/user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupServiceService } from './services/signup-service.service';
import { VendorServiceService } from './services/vendor.service';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';
import { UserDashboardComponent } from './candidate/user-dashboard/user-dashboard.component';
import { BudgetCalculatorComponent } from './candidate/budget-calculator/budget-calculator.component';
import { VendorDashboardComponent } from './business/vendor-dashboard/vendor-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AppoinmentComponent } from './candidate/appoinment/appoinment.component';
import { VendorLoginComponent } from './business/vendor-login/vendor-login.component';

import {MatTableModule} from '@angular/material/table';
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
    BudgetCalculatorComponent,
    VendorDashboardComponent,
    FooterComponent,
    AppoinmentComponent,
    
    VendorLoginComponent
  ],
  // imports: [],
  exports: [CommonModule, MatInputModule, MatTableModule],
  entryComponents: [
    AppoinmentComponent
  ],
  imports: [
    CommonModule, 
    MatInputModule,
    MatTableModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'user', component: UserComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'user-dashboard', component: UserDashboardComponent},
      {path: 'budget-cal', component: BudgetCalculatorComponent},
      {path: 'vendor-login', component: VendorLoginComponent},

    ]),
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule, MatButtonModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,
    MatInputModule 
  ],
  providers: [
    SignupServiceService,
    LogInServiceService,
    UserdetailService,
    ApponimentService,
    VendorServiceService,
    { provide: ApponimentService, useClass: ApponimentService},
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class MaterialModule { }
