using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PayslipDemo.Controllers.Resources;
using PayslipDemo.Models;

namespace PayslipDemo.Controllers
{
    [Route("/api/payslips")]
    public class PayslipController : Controller
    {
        private readonly PayslipDbContext _context;
        private readonly IMapper _mapper;

        public PayslipController(PayslipDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<PayslipResource>> GetPayslips()
        {
            var payslipsIdDb = await _context.Payslips.Include(a => a.User)
                .Include(a => a.PayslipType).ToListAsync();
            var payslipsResource = _mapper.Map<List<Payslip>, List<PayslipResource>>(payslipsIdDb);
            foreach (var payslip in payslipsResource)
            {
                payslip.StatusDescription = payslip.Status.ToString();
            }

            return payslipsResource;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPayslip(int id)
        {
            var payslipIdDb = await _context.Payslips.Include(a => a.User)
                .Include(a => a.PayslipType).SingleAsync(a => a.Id == id);
            var payslipResource = _mapper.Map<Payslip, PayslipResource>(payslipIdDb);
            return Ok(payslipResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayslip(int id)
        {
            var payslipIdDb = await _context.Payslips.Include(a => a.User)
                .Include(a => a.PayslipType).SingleAsync(a => a.Id == id);
            _context.Payslips.Remove(payslipIdDb);
            await _context.SaveChangesAsync();

            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePayslip([FromBody] PayslipResource payslipResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var payslip = _mapper.Map<PayslipResource, Payslip>(payslipResource);
            payslip.PaymentDate = DateTime.Now;

            await _context.Payslips.AddAsync(payslip);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<Payslip, PayslipResource>(payslip);

            return Ok(result);
        }
    }
}