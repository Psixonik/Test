using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Linq;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        const string connectionString= "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Test.mdf;Integrated Security=True";
        DataContext db = new DataContext(connectionString);

        // GET api/values
        public IEnumerable<Anonim> Get()
        {           
            Table<Ad> ads = db.GetTable<Ad>();
            Table<CategoryAd> cat = db.GetTable<CategoryAd>();
            Table<TypeAd> type = db.GetTable<TypeAd>();

            var ads1 = (from f in db.GetTable<Ad>()
                        join h in db.GetTable<CategoryAd>() on f.CategoryId equals h.Id
                        join c in db.GetTable<TypeAd>() on f.AdTypeId equals c.Id
                       select new { f.Id, c.Type, h.Category, f.Cost, f.Content }).ToArray();
            List<Anonim> axez = new List<Anonim>();
            foreach (var item in ads1)
            {
                Anonim axez2 = new Anonim(item.Id, item.Type, item.Category, item.Cost, item.Content);
                axez.Add(axez2);
            }

            return axez;
        }

        // GET api/values/5
        public Anonim Get(int id)
        {           
            var ansver = (from f in db.GetTable<Ad>()
                        join h in db.GetTable<CategoryAd>() on f.CategoryId equals h.Id
                        join c in db.GetTable<TypeAd>() on f.AdTypeId equals c.Id
                        where f.Id==id
                        select new { f.Id, c.Type, h.Category, f.Cost, f.Content }).FirstOrDefault();
            Anonim ad = new Anonim(ansver.Id, ansver.Type, ansver.Category, ansver.Cost, ansver.Content);
            return ad;
        }

        // POST api/values
        public void Post([FromBody]Ad value)
        {
            db.GetTable<Ad>().InsertOnSubmit(value);
            db.SubmitChanges();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Ad value)
        {
            Ad ad = db.GetTable<Ad>().FirstOrDefault(c=>c.Id==id);

            ad.AdTypeId = value.AdTypeId;
            ad.CategoryId = value.CategoryId;
            ad.Cost = value.Cost;
            ad.Content = value.Content;

            db.SubmitChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            // получим объект для удаления
            var ad = db.GetTable<Ad>().FirstOrDefault(c => c.Id == id);
            db.GetTable<Ad>().DeleteOnSubmit(ad);
            db.SubmitChanges();
        }
    }
}
