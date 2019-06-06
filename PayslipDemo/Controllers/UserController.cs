using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PayslipDemo.Controllers.Resources;
using PayslipDemo.Models;

namespace PayslipDemo.Controllers
{
    public class UserController : Controller
    {
        private readonly PayslipDbContext _context;
        private readonly IMapper _mapper;

        public UserController(PayslipDbContext context, IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }

        [HttpGet("api/users")]
        public async Task<IEnumerable<UserResource>> GetUsers()
        {
            var users = await _context.Users.Include(a => a.UserRoleType).ToListAsync();
            return _mapper.Map<List<User>, List<UserResource>>(users);
        }
    }
}