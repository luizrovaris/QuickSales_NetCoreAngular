﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using System;
using System.IO;

namespace QuickSales.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository productRepository;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;
        public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor, IWebHostEnvironment webHostEnvironment)
        {
            this.productRepository = productRepository;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            ActionResult result;

            try
            {
                result = Json(this.productRepository.GetAll());
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product product)
        {
            ActionResult result;

            try
            {
                product.Validate();

                if (product.IsValid)
                {
                    if (product.Id > 0)
                    {
                        Product currentProduct = this.productRepository.GetEntityById(product.Id);

                        if (product.File != currentProduct.File)
                        {
                            this.RemoveProductImage(product.File);
                        }

                        this.productRepository.Update(product);
                    }
                    else
                    {
                        this.productRepository.Add(product);
                    }

                    result = Created("api/product", product);
                }
                else
                {
                    result = BadRequest(product.GetMessages());
                }
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            ActionResult result;

            try
            {
                Product product = this.productRepository.GetEntityById(id);
                this.RemoveProductImage(product.File);

                this.productRepository.Delete(id);
                result = Json(this.productRepository.GetAll());
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }

        private void RemoveProductImage(string productFile)
        {
            if (!string.IsNullOrEmpty(productFile))
            {
                if (System.IO.File.Exists(Path.Combine(this.webHostEnvironment.WebRootPath + "\\files\\", productFile)))
                {
                    System.IO.File.Delete(Path.Combine(this.webHostEnvironment.WebRootPath + "\\files\\", productFile));
                }
            }
        }

        [HttpPost("file")]
        public IActionResult SendFile()
        {
            ActionResult result;

            try
            {
                IFormFile selectedFormFile = this.httpContextAccessor.HttpContext.Request.Form.Files["selectedFile"];

                string newName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(selectedFormFile.FileName);
                string path = this.webHostEnvironment.WebRootPath + "\\files\\";

                using (var streamFile = new FileStream(path + newName, FileMode.Create))
                {
                    selectedFormFile.CopyTo(streamFile);
                }

                result = Json(newName);
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }
    }
}
