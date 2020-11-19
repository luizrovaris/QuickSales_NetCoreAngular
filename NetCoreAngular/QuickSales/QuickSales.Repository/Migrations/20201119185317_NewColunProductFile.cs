using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickSales.Repository.Migrations
{
    public partial class NewColunProductFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "File",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "File",
                table: "Products");
        }
    }
}
