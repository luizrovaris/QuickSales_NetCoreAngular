using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickSales.Domain.Entities;
using System;

namespace QuickSales.Repository.Config
{
    public class PurchaseOrderItemConfiguration : IEntityTypeConfiguration<PurchaseOrderItem>
    {
        public void Configure(EntityTypeBuilder<PurchaseOrderItem> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Quantity)
                .IsRequired();
            builder.Property(p => p.ProductId)
                .IsRequired();
        }
    }
}
