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
            CreateMap<PayslipResource, Payslip>();
            CreateMap<User, UserResource>();
        }
    }
}