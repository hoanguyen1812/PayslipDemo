using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PayslipDemo.Controllers.Resources;
using PayslipDemo.Models;

namespace PayslipDemo.Controllers
{
    public class PayslipController : Controller
    {
        private readonly PayslipDbContext _context;
        private readonly IMapper _mapper;

        public PayslipController(PayslipDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("/api/payslips")]
        public async Task<IEnumerable<PayslipResource>> GetPayslips()
        {
            var payslips = await _context.Payslips.Include(a => a.User)
                .Include(a => a.PayslipType).ToListAsync();
            return _mapper.Map<List<Payslip>, List<PayslipResource>>(payslips);
        }
    }
}