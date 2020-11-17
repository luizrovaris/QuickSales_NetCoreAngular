using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace QuickSales.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository productRepository;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IHostingEnvironment hostingEnvironment; 
        public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            this.productRepository = productRepository;
            this.httpContextAccessor = httpContextAccessor;
            this.hostingEnvironment = hostingEnvironment;
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

        [HttpPost("file")]
        public IActionResult SendFile()
        {
            ObjectResult result;

            try
            {
                IFormFile selectedFormFile = this.httpContextAccessor.HttpContext.Request.Form.Files["selectedFile"];

                string newName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(selectedFormFile.FileName);
                string path = this.hostingEnvironment.WebRootPath + "\\files\\";

                using (var streamFile = new FileStream(path + newName, FileMode.Create))
                {
                    selectedFormFile.CopyTo(streamFile);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }
    }
}
