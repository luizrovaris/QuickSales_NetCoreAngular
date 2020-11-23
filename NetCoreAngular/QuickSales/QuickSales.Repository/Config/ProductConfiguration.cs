using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickSales.Domain.Entities;

namespace QuickSales.Repository.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(p => p.Description)
                .IsRequired()
                .HasMaxLength(400);
            builder.Property(p => p.Price)
                .HasColumnType("decimal(19,4)")
                .IsRequired();
        }
    }
}
