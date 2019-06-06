using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using PayslipDemo.Controllers.Resources;
using PayslipDemo.Models;

namespace PayslipDemo.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Payslip, PayslipResource>();
            CreateMap<User, UserResource>();
        }
    }
}
