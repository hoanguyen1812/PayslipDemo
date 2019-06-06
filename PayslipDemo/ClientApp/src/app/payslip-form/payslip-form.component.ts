import { Component, OnInit } from '@angular/core';
import { PayslipService } from '../services/payslip.service';

@Component({
    selector: 'app-payslip-form',
    templateUrl: './payslip-form.component.html',
    styleUrls: ['./payslip-form.component.css']
})
/** payslip-form component*/
export class PayslipFormComponent implements OnInit {
  payslips;
  payslipId = "";
    /** payslip-form ctor */
    constructor(private payslipService : PayslipService) {
      
  }
    ngOnInit() {
      this.payslipService.getPayslips().subscribe(payslips => {
        this.payslips = payslips;
        console.log("MAKE", this.payslips);
      });
  }
  onMakeChange() {
    console.log(this.payslipId);
  }
}
