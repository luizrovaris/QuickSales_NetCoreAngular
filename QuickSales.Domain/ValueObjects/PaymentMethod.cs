using QuickSales.Domain.Enumerators;

namespace QuickSales.Domain.ValueObjects
{
    public class PaymentMethod
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public bool IsCreditCard
        {
            get { return this.Id == (int)PaymentMethodType.CreditCard; }
        }

        public bool IsCash
        {
            get { return this.Id == (int)PaymentMethodType.Cash; }
        }

        public bool IsDirectDeposit
        {
            get { return this.Id == (int)PaymentMethodType.DirectDeposit; }
        }

        public bool NotDefined
        {
            get { return this.Id == (int)PaymentMethodType.NotDefined; }
        }
    }
}
