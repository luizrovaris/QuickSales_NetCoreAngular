using Microsoft.AspNetCore.Mvc;
using QuickSales.Domain.Entities;
using System;

namespace QuickSales.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost("login")]
        public ActionResult Login([FromBody] User user)
        {
            ActionResult result;

            try
            {
                if (user.Email == "lr@mail.com" && user.Password == "1234")
                {
                    result = Ok(user);
                }
                else
                {
                    result = BadRequest("Invalid login");
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