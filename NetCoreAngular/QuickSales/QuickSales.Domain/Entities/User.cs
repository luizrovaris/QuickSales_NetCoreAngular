using QuickSales.Domain.Entities.Base;
using System.Collections.Generic;

namespace QuickSales.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrWhiteSpace(this.Email))
            {
                base.AddMessage("Email is required");
            }

            if (string.IsNullOrWhiteSpace(this.Password))
            {
                base.AddMessage("Senha is empty");
            }
        }
    }
}
