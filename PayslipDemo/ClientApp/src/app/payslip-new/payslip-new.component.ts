import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { PayslipService } from "../services/payslip.service";
import { ToastyService } from "ng2-toasty";

@Component({
  selector: "app-payslip-new",
  templateUrl: "./payslip-new.component.html",
  styleUrls: ["./payslip-new.component.css"]
})
/** payslip-new component*/
export class PayslipNewComponent implements OnInit {
  users;
  payslip = {
    paymentPeriodStartDate: "",
    paymentPeriodEndDate: "",
    paymentDate: "",
    payslipTypeId: "",
    chequeNumber: "",
    status
  };

  /** payslip-new ctor */
  constructor(private userService: UserService,
    private payslipService: PayslipService,
    private toastyService : ToastyService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onChange() {
    this.payslip.chequeNumber = "";
  }

  submit() {
    this.payslip.status = '1';
    this.payslipService.create(this.payslip)
      .subscribe(
        success => this.toastyService.success(
          {
            title: 'Success',
            msg: 'Data was successfully saved.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
        })
      , error => this.toastyService.error(
          {
            title: 'Error',
            msg: 'An unexpected error.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          }));
  }

  saveAsDraft() {
    this.payslip.status = '0';
    this.payslipService.create(this.payslip)
      .subscribe(
        success => this.toastyService.success(
          {
            title: 'Success',
            msg: 'Data was successfully saved.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })
        , error => this.toastyService.error(
          {
            title: 'Error',
            msg: 'An unexpected error.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          }));
  }
}
