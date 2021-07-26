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
    public class AllTypeAndCotegoriController : ApiController
    {
        const string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Test.mdf;Integrated Security=True";
        DataContext db = new DataContext(connectionString);

        // GET: api/AllTypeAndCotegori
        public List<object> Get()
        {
            Table<CategoryAd> cat = db.GetTable<CategoryAd>();
            Table<TypeAd> typeAd = db.GetTable<TypeAd>();
            List<object> arr = new List<object>();
            arr.Add(cat);
            arr.Add(typeAd);
            return arr;
        }

        // GET: api/AllTypeAndCotegori/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AllTypeAndCotegori
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AllTypeAndCotegori/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AllTypeAndCotegori/5
        public void Delete(int id)
        {
        }
    }
}
