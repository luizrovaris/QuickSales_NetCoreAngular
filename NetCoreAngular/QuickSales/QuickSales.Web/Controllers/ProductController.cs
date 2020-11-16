using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using System;
using System.Collections.Generic;

namespace QuickSales.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository productRepository;
        private readonly IHttpContextAccessor httpContextAccessor;
        public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor)
        {
            this.productRepository = productRepository;
            this.httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        public IActionResult Get()
        {
            ObjectResult result;

            try
            {
                //result = Ok(productRepository.GetAll());
                result = Ok(new List<Product>(){ new Product() { Name = "PRD1", Id = 1, Price= 19.99m }, new Product() { Name = "PRD2", Id = 2, Price = 15.45m } });
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }
        
        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            ObjectResult result;

            try
            {
                productRepository.Add(product);
                result = Created("api/product", product);
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }
    }
}
