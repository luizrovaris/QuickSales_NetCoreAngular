using Microsoft.AspNetCore.Mvc;
using QuickSales.Domain.Contracts;
using QuickSales.Domain.Entities;
using System;

namespace QuickSales.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] User user)
        {
            ActionResult result;

            try
            {
                User userResult = this.userRepository.Get(user.Email, user.Password);

                if (userResult != null)
                {
                    result = Ok(userResult);
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

        [HttpPost]
        public ActionResult Post([FromBody] User user)
        {
            ActionResult result;

            try
            {
                User userResult = this.userRepository.Get(user.Email);

                if (userResult != null)
                {
                    result = BadRequest("User already exists");
                }
                else
                {
                    this.userRepository.Add(user);
                    result = Ok(user);
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