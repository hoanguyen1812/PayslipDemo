import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayslipService } from "../services/payslip.service";

@Component({
    selector: 'app-payslip-view',
    templateUrl: './payslip-view.component.html',
    styleUrls: ['./payslip-view.component.css']
})
/** payslip-view component*/
export class PayslipViewComponent implements OnInit{
  payslipId: number;
  payslip;
    /** payslip-view ctor */
  constructor(private route: ActivatedRoute,
    private router: Router,
    private payslipService: PayslipService) {
      route.params.subscribe(p => {
        this.payslipId = +p['id'];
        if (isNaN(this.payslipId) || this.payslipId <= 0) {
          router.navigate(['/payslips-form']);
          return;
        }
      });
  }

  ngOnInit() {

    this.payslipService.getPayslip(this.payslipId)
      .subscribe(
        p => this.payslip = p,
        err => {
          if (err.status === 404) {
            this.router.navigate(['/payslips-form']);
            return;
          }
        });
  }
}
