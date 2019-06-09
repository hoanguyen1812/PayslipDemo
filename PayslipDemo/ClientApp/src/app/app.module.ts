import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastyModule } from "ng2-toasty";
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { PayslipFormComponent } from "./payslip-form/payslip-form.component";
import { HomeComponent } from "./home/home.component";
import { PayslipNewComponent } from "./payslip-new/payslip-new.component";
import { PayslipViewComponent } from "./payslip-view/payslip-view.component";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


import { PayslipService } from "./services/payslip.service";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PayslipFormComponent,
    PayslipNewComponent,
    HomeComponent,
    ConfirmDialogComponent,
    PayslipViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot([
      { path: "payslip-form", component: PayslipFormComponent },
      { path: "payslip-new", component: PayslipNewComponent },
      { path: "payslip-view/:id", component: PayslipViewComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    PayslipService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent],
})
export class AppModule {
}
