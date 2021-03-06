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

  getPayslip(id) {
    return this.http.get('/api/payslips/' + id);
  }

  delete(id) {
    return this.http.delete('/api/payslips/' + id);
  }

  updatePayslip(payslip) {
    return this.http.put("/api/payslips", payslip);
  }
}
