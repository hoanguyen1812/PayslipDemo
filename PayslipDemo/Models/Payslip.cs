using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PayslipDemo.Models
{
    public class Payslip
    {
        public int Id { get; set; }
        public DateTime PaymentPeriodStartDate { get; set; }
        public DateTime PaymentPeriodEndDate { get; set; }
        public DateTime PaymentDate { get; set; }
        public PayslipStatus Status { get; set; }
        public int PayNet { get; set; }
        public ModeOfPayment ModeOfPayment { get; set; }
        public int? ChequeNumber { get; set; }
        public int EmployeeContribution { get; set; }
        public int EmployerContribution { get; set; }
        public int PayslipTypeId { get; set; }
        public PayslipType PayslipType { get; set; }
        public int UserId { get; set; }
    }
}
