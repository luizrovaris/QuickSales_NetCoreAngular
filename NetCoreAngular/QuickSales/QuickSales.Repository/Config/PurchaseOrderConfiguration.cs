using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickSales.Domain.Entities;
using System;

namespace QuickSales.Repository.Config
{
    public class PurchaseOrderConfiguration : IEntityTypeConfiguration<PurchaseOrder>
    {
        public void Configure(EntityTypeBuilder<PurchaseOrder> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.City)
                .IsRequired()
                .HasMaxLength(100);
            builder.Property(p => p.Address)
                .IsRequired()
                .HasMaxLength(150);
            builder.Property(p => p.AddressNumber)
                .IsRequired()
                .HasMaxLength(15);
            builder.Property(p => p.PostalCode)
                .IsRequired()
                .HasMaxLength(15);
            builder.Property(p => p.ExpectedDeliveryDate);
            builder.Property(p => p.PurchaseOrderDate)
                .IsRequired();
        }
    }
}
