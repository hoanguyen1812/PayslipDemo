using System;
using System.ComponentModel.DataAnnotations;
using PayslipDemo.Models;

namespace PayslipDemo.Controllers.Resources
{
    public class PayslipResource
    {
        public int Id { get; set; }

        [Required]
        public DateTime PaymentPeriodStartDate { get; set; }

        [Required]
        public DateTime PaymentPeriodEndDate { get; set; }

        [Required]
        public DateTime PaymentDate { get; set; }

        [Required]
        public int PayNet { get; set; }

        public int? ChequeNumber { get; set; }
        public int? EmployeeContribution { get; set; }
        public int? EmployerContribution { get; set; }
        public ModeOfPayment ModeOfPayment { get; set; }

        [Required]
        public int UserId { get; set; }
        public int PayslipTypeId { get; set; }
        public string StatusDescription { get; set; }
        public PayslipStatus Status { get; set; }
    }
}