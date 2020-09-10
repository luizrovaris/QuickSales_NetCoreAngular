using QuickSales.Domain.Entities.Base;

namespace QuickSales.Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrWhiteSpace(this.Name ))
            {
                base.AddMessage("Name is required");
            }

            if (this.Price <= 0)
            {
                base.AddMessage("Price must be greater than 0");
            }
        }
    }
}
