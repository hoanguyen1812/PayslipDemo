using System;
using PayslipDemo.Models;

namespace PayslipDemo.Controllers.Resources
{
    public class PayslipResource
    {
        public int Id { get; set; }
        public DateTime PaymentPeriodStartDate { get; set; }
        public DateTime PaymentPeriodEndDate { get; set; }
        public DateTime PaymentDate { get; set; }
        public int PayNet { get; set; }
        public int? ChequeNumber { get; set; }
        public int EmployeeContribution { get; set; }
        public int EmployerContribution { get; set; }
        public int UserId { get; set; }
        public int PayslipTypeId { get; set; }
        public PayslipStatus Status { get; set; }
    }
}