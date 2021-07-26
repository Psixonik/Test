using System;
using System.Collections.Generic;
using System.Data.Linq.Mapping;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table(Name = "CategoryAds")]
    public class CategoryAd
    {
        [Column(IsPrimaryKey = true, IsDbGenerated = true)]
        public int Id { get; set; }

        [Column(Name = "Category")]
        public string Category { get; set; }

    }
}