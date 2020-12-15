﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickSales.Repository.Migrations
{
    public partial class AddAdminColumnForUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsAdministrator",
                table: "Users",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAdministrator",
                table: "Users");
        }
    }
}
