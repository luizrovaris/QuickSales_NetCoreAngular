using QuickSales.Domain.Contracts.Base;
using QuickSales.Domain.Entities.Base;
using QuickSales.Repository.Context;
using System.Collections.Generic;
using System.Linq;

namespace QuickSales.Repository.Repositories.Base
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity>
                where TEntity : BaseEntity
    {
        protected readonly QuickSalesContext QuickSalesContext;
        public BaseRepository(QuickSalesContext quickSalesContext)
        {
            this.QuickSalesContext = quickSalesContext;
        }

        public void Add(TEntity entity)
        {
            QuickSalesContext.Set<TEntity>().Add(entity);
            QuickSalesContext.SaveChanges();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return QuickSalesContext.Set<TEntity>().ToList();
        }

        public TEntity GetEntityById(int id)
        {
            return QuickSalesContext.Set<TEntity>().Find(id);
        }

        public void Update(TEntity entity)
        {
            QuickSalesContext.Set<TEntity>().Update(entity);
            QuickSalesContext.SaveChanges();
        }

        public void Delete(int id)
        {
            TEntity entity = this.GetEntityById(id);

            QuickSalesContext.Set<TEntity>().Remove(entity);
            QuickSalesContext.SaveChanges();
        }

        public void Dispose()
        {
            QuickSalesContext.Dispose();
        }
    }
}
