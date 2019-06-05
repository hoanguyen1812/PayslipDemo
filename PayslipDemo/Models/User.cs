using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PayslipDemo.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int UserRoleTypeId { get; set; }
        public UserRoleType UserRoleType { get; set; }
    }
}
