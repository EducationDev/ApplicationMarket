using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Market.Business;
using Market.Entities.Models;

namespace Market.Site.Controllers
{
    public class CategoryController : Controller
    {
        public ActionResult Index()
        {
            var biz = new CategoryBiz();
            var model = biz.Listar();
            return View(model);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Category model)
        {
            if(!ModelState.IsValid)
                return View();

            try
            {
                var biz = new CategoryBiz();
                biz.Agregar(model);
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                /// Que pasa con el error -> Bitacoras
                Console.WriteLine(e);
                return View(model);
            }
        }
        [HttpGet]
        public ActionResult Delete(int id)
        {
            var biz = new CategoryBiz();
            var model = biz.Get(id);
            return View(model);
        }
        [HttpPost]
        public ActionResult Delete(Category model)
        {
            var biz = new CategoryBiz();
            biz.Eliminar(model);
            return RedirectToAction("Index");
        }

    }
}