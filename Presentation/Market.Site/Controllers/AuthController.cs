using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using Market.Site.Models;
using Microsoft.Owin;
using Microsoft.Owin.Security;

namespace Market.Site.Controllers
{
    [AllowAnonymous]
    public class AuthController : BaseController
    {
        [HttpGet]
        public ActionResult LogIn(string returnUrl)
        {
            var model = new LogInModel
            {
                ReturnUrl = returnUrl
            };
            return View(model);
        }
        [HttpPost]
        public ActionResult LogIn(LogInModel model)
        {
            if (!ModelState.IsValid)
                return View();

            if (model.Email == "admin@market.com" && model.Password == "password")
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, "admin@market.com"),
                    new Claim(ClaimTypes.Email, "admin@market.com"),
                    new Claim(ClaimTypes.Country, "Argentina"),
                };
                var identity = new ClaimsIdentity(claims, "ApplicationCookie");
                IOwinContext ctx = Request.GetOwinContext();
                IAuthenticationManager authManager = ctx.Authentication;
                authManager.SignIn(identity);
                return Redirect(GetRedirectUrl(model.ReturnUrl));
            }
            ModelState.AddModelError("", "El correo electrónico o la contraseña no son válidos.");
            return View();
        }
        public ActionResult LogOut()
        {
            var ctx = Request.GetOwinContext();
            var authManager = ctx.Authentication;

            authManager.SignOut("ApplicationCookie");
            return RedirectToAction("Index", "Home");
        }


    }
}