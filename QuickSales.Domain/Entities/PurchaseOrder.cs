using QuickSales.Domain.Entities.Base;
using QuickSales.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickSales.Domain.Entities
{
    public class PurchaseOrder : BaseEntity
    {
        public DateTime PurchaseOrderDate { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public DateTime ExpectedDeliveryDate { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string AddressNumber { get; set; }
        public int PaymentMethodId { get; set; }
        public virtual PaymentMethod PaymentMethod { get; set; }

        public virtual ICollection<PurchaseOrderItem> PurchaseOrderItems { get; set; }

        public override void Validate()
        {
            if (this.PurchaseOrderItems?.Any() != true)
            {
                base.AddMessage("Purchase order has no items");
            }

            if (string.IsNullOrWhiteSpace(this.PostalCode))
            {
                base.AddMessage("Postal code is required");
            }
        }
    }
}
