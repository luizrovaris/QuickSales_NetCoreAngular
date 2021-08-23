using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using QuickSales.Repository.Context;
using QuickSales.Repository.Repositories.Base;

namespace QuickSales.Repository.Repositories
{
    public class PurchaseOrderRepository : BaseRepository<PurchaseOrder>, IPurchaseOrderRepository
    {
        public PurchaseOrderRepository(QuickSalesContext quickSalesContext) 
            : base(quickSalesContext)
        {
        }
    }
}
