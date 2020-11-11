using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using QuickSales.Repository.Context;
using QuickSales.Repository.Repositories.Base;
using System.Linq;

namespace QuickSales.Repository.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(QuickSalesContext quickSalesContext) 
            : base(quickSalesContext)
        {
        }

        public User Get(string email, string password)
        {
            return this.QuickSalesContext.Users.FirstOrDefault(x => x.Email == email && x.Password == password);
        }

        public User Get(string email)
        {
            return this.QuickSalesContext.Users.FirstOrDefault(x => x.Email == email);
        }
    }
}
