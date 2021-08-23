using QuickSales.Domain.Contracts.Base;
using QuickSales.Domain.Entities;

namespace QuickSales.Domain.Contracts
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User Get(string email, string password);
        User Get(string email);
    }
}
