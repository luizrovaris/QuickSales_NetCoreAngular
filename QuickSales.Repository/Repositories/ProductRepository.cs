using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using QuickSales.Repository.Context;
using QuickSales.Repository.Repositories.Base;

namespace QuickSales.Repository.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(QuickSalesContext quickSalesContext) 
            : base(quickSalesContext)
        {
        }
    }
}
