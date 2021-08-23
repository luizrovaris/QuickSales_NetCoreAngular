using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickSales.Domain.ValueObjects;
using System;

namespace QuickSales.Repository.Config
{
    public class PaymentMethodConfiguration : IEntityTypeConfiguration<PaymentMethod>
    {
        public void Configure(EntityTypeBuilder<PaymentMethod> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(p => p.Description)
                .IsRequired()
                .HasMaxLength(100);
        }
    }
}
