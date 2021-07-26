using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class CategoryController : ApiController
    {

        const string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Test.mdf;Integrated Security=True";
        DataContext db = new DataContext(connectionString);
        // GET api/category
        public IEnumerable<CategoryAd> Get()
        {
            Table<CategoryAd> cat = db.GetTable<CategoryAd>();
            return cat;
        }
        // POST api/category
        public void Post([FromBody]CategoryAd value)
        {
            db.GetTable<CategoryAd>().InsertOnSubmit(value);
            db.SubmitChanges();
        }
        // DELETE api/category/5
        public void Delete(int id)
        {
            // получим объект для удаления
            var cat = db.GetTable<CategoryAd>().FirstOrDefault(c => c.Id == id);
            db.GetTable<CategoryAd>().DeleteOnSubmit(cat);
            db.SubmitChanges();
        }
    }
}
