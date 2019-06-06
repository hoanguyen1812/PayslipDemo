import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PayslipService {
  constructor(private http: HttpClient) {

  }
  getPayslips() {
    return this.http.get('/api/payslips');
  }
}
