using Microsoft.EntityFrameworkCore;
using QuickSales.Domain.Entities;
using QuickSales.Domain.Enumerators;
using QuickSales.Domain.ValueObjects;
using QuickSales.Repository.Config;

namespace QuickSales.Repository.Context
{
    public class QuickSalesContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
        public DbSet<PurchaseOrderItem> PurchaseOrderItems { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }

        public QuickSalesContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new PurchaseOrderConfiguration());
            modelBuilder.ApplyConfiguration(new PurchaseOrderItemConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentMethodConfiguration());

            modelBuilder.Entity<PaymentMethod>().HasData(
                new PaymentMethod()
                {
                    Id = (int)PaymentMethodType.Cash,
                    Name = PaymentMethodType.Cash.ToString(),
                    Description = PaymentMethodType.Cash.ToString()
                },
                new PaymentMethod()
                {
                    Id = (int)PaymentMethodType.CreditCard,
                    Name = PaymentMethodType.CreditCard.ToString(),
                    Description = PaymentMethodType.CreditCard.ToString()
                },
                new PaymentMethod()
                {
                    Id = (int)PaymentMethodType.DirectDeposit,
                    Name = PaymentMethodType.DirectDeposit.ToString(),
                    Description = PaymentMethodType.DirectDeposit.ToString()
                });

            base.OnModelCreating(modelBuilder);
        }
    }
}
