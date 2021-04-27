using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Market.Site.Controllers
{
    public abstract class BaseController : Controller
    {
        //public UserViewModel CurrentUser => new UserViewModel(this.User as ClaimsPrincipal);

        protected string GetRedirectUrl(string returnUrl)
        {
            if (string.IsNullOrEmpty(returnUrl) || !Url.IsLocalUrl(returnUrl))
            {
                return Url.Action("Index", "Home");
            }

            return returnUrl;
        }
    }
}