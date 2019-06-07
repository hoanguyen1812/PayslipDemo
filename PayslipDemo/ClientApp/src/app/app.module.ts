import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PayslipFormComponent } from './payslip-form/payslip-form.component';
import { HeaderComponent } from './header/header.component';
import { PayslipNewComponent } from './payslip-new/payslip-new.component';

import { PayslipService } from './services/payslip.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PayslipFormComponent,
    PayslipNewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot([
      { path: 'payslip-form', component: PayslipFormComponent},
      { path: 'payslip-new', component: PayslipNewComponent}
    ])
  ],
  providers: [
    PayslipService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
