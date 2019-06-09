import { Component, OnInit } from "@angular/core";
import { ToastyService } from "ng2-toasty";
import { Router } from "@angular/router";

import { PayslipService } from "../services/payslip.service";

@Component({
  selector: "app-payslip-form",
  templateUrl: "./payslip-form.component.html",
  styleUrls: ["./payslip-form.component.css"]
})
/** payslip-form component*/
export class PayslipFormComponent implements OnInit {
  payslips;
  payslipId = "";
  paymentPeriodFrom;
  paymentPeriodTo;
  payDate;

  /** payslip-form ctor */
  constructor(private payslipService: PayslipService,
    private toastyService: ToastyService,
    private router: Router,) {

  }

  ngOnInit() {
    this.payslipService.getPayslips().subscribe(payslips => this.payslips = payslips);
  }

  clear() {
    this.payslipId = '';
    this.paymentPeriodFrom = '';
    this.paymentPeriodTo = '';
    this.payDate = '';
    this.ngOnInit();
  }

  clickMethod(id) {
    if (confirm("Are you sure to delete ")) {
      this.payslipService.delete(id)
        .subscribe(
          success => {
            this.toastyService.success(
                {
                  title: "Success",
                  msg: "The payslip was successfully deleted.",
                  theme: "bootstrap",
                  showClose: true,
                  timeout: 5000,
                }),
              this.ngOnInit();
          },
          error => this.toastyService.error(
            {
              title: "Error",
              msg: "An unexpected error.",
              theme: "bootstrap",
              showClose: true,
              timeout: 5000
            }));
    }
  }
}
