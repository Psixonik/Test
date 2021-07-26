using System;
using System.Collections.Generic;
using System.Data.Linq.Mapping;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table(Name = "TypeAds")]
    public class TypeAd
    {
        [Column(IsPrimaryKey = true, IsDbGenerated = true)]
        public int Id { get; set; }

        [Column(Name = "Type")]
        public string Type { get; set; }

    }
}