import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class PayslipService {
  constructor(private http: HttpClient) {

  }
  getPayslips() {
    return this.http.get('/api/payslips');
  }

  create(payslip) {
    return this.http.post('/api/payslips', payslip);
  }
}
