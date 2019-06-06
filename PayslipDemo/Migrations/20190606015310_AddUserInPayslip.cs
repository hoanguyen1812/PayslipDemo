using Microsoft.EntityFrameworkCore.Migrations;

namespace PayslipDemo.Migrations
{
    public partial class AddUserInPayslip : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Payslips_UserId",
                table: "Payslips",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Payslips_Users_UserId",
                table: "Payslips",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Payslips_Users_UserId",
                table: "Payslips");

            migrationBuilder.DropIndex(
                name: "IX_Payslips_UserId",
                table: "Payslips");
        }
    }
}
