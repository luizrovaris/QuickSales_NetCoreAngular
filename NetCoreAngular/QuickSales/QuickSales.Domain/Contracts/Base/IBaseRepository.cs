using QuickSales.Domain.Entities.Base;
using System;
using System.Collections.Generic;

namespace QuickSales.Domain.Contracts.Base
{
    public interface IBaseRepository<TEntity> : IDisposable
        where TEntity : BaseEntity
    {
        void Add(TEntity entity);
        TEntity GetEntityById(int id);
        IEnumerable<TEntity> GetAll();
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
