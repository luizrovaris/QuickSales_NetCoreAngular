using QuickSales.Domain.Entities.Base;

namespace QuickSales.Domain.Entities
{
    public class PurchaseOrderItem : BaseEntity
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public override void Validate()
        {
            if (this.ProductId == 0)
            {
                base.AddMessage("Product missing");
            }

            if (this.Quantity == 0)
            {
                base.AddMessage("Quantity must be greater than 0");
            }
        }
    }
}
