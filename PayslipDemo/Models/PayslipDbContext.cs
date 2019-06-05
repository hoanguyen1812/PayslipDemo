using Microsoft.EntityFrameworkCore;

namespace PayslipDemo.Models
{
    public class PayslipDbContext : DbContext
    {
        public PayslipDbContext(DbContextOptions<PayslipDbContext> options)
            : base(options)
        {
        }

        public DbSet<Payslip> Payslips { get; set; }
        public DbSet<PayslipType> PayslipTypes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRoleType> UserRoleTypes { get; set; }
    }
}