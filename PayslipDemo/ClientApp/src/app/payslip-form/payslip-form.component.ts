import { Component, OnInit } from "@angular/core";
import { ToastyService } from "ng2-toasty";
import { Router } from "@angular/router";
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

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
  result: string = '';

  /** payslip-form ctor */
  constructor(private payslipService: PayslipService,
    private toastyService: ToastyService,
    private router: Router,
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.payslipService.getPayslips().subscribe(payslips => this.payslips = payslips);
  }

  deletePayslip(payslip): void {

    const dialogData = new ConfirmDialogModel("Delete Issued", payslip);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === true) {
        this.payslipService.delete(payslip.id)
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
    });
  }

  clear() {
    this.payslipId = '';
    this.paymentPeriodFrom = '';
    this.paymentPeriodTo = '';
    this.payDate = '';
    this.ngOnInit();
  }

  updateStatusToVoid(payslip) {
    payslip.status = '0';
    this.payslipService.updatePayslip(payslip).subscribe(
      success => {
        this.toastyService.success(
            {
              title: "Success",
              msg: "The payslip was successfully updated.",
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
        }));;
  }

  editPayslip(id) {
    this.router.navigate(['/payslip-view/']);
  }
}
