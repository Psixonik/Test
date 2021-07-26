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
    public class TypeAdController : ApiController
    {
        const string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Test.mdf;Integrated Security=True";
        DataContext db = new DataContext(connectionString);

        // GET: api/TypeAd
        public  IEnumerable<TypeAd> Get()
        {
            Table<TypeAd> typeAd = db.GetTable<TypeAd>();
            return  typeAd;
        }

        // GET: api/TypeAd/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TypeAd
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TypeAd/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TypeAd/5
        public void Delete(int id)
        {
        }
    }
}
