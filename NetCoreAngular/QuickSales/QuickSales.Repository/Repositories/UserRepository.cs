using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using QuickSales.Repository.Context;
using QuickSales.Repository.Repositories.Base;

namespace QuickSales.Repository.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(QuickSalesContext quickSalesContext) 
            : base(quickSalesContext)
        {
        }
    }
}
