using Microsoft.AspNetCore.Mvc;
using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using System;

namespace QuickSales.Web.Controllers
{

    [Route("api/[controller]")]
    public class PurchaseOrderController : Controller
    {
        private readonly IPurchaseOrderRepository purchaseOrderRepository;
        public PurchaseOrderController(IPurchaseOrderRepository purchaseOrderRepository)
        {
            this.purchaseOrderRepository = purchaseOrderRepository;
        }

        [HttpPost]
        public IActionResult Post([FromBody]PurchaseOrder purchaseOrder)
        {
            ActionResult result;

            try
            {
                purchaseOrder.Validate();

                if (purchaseOrder.IsValid)
                {
                    this.purchaseOrderRepository.Add(purchaseOrder);

                    result = Ok(purchaseOrder.Id);
                }
                else
                {
                    result = BadRequest(purchaseOrder.GetMessages());
                }
            }
            catch (Exception ex)
            {
                result = BadRequest(ex);
            }

            return result;
        }
    }
}
