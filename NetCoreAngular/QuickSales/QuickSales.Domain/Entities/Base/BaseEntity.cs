using System.Collections.Generic;
using System.Linq;

namespace QuickSales.Domain.Entities.Base
{
    public abstract class BaseEntity
    {
        public BaseEntity()
        {
            this.validationMessages = new List<string>();
        }
        public int Id { get; set; }

        private List<string> validationMessages { get; set; }

        protected void AddMessage(string message)
        {
            this.validationMessages.Add(message);
        }
        protected void ClearMessages()
        {
            this.validationMessages.Clear();
        }

        public abstract void Validate();
        public bool IsValid
        {
            get
            {
                return !this.validationMessages.Any();
            }
        }
    }
}
