using System;
using System.Collections.Generic;
using System.Data.Linq.Mapping;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table(Name = "Ads")]
    public class Ad
    {
        [Column(IsPrimaryKey = true, IsDbGenerated = true)]
        public int Id { get; set; }

        [Column(Name = "AdTypeId")]
        public int AdTypeId { get; set; }

        [Column(Name = "CategoryId")]
        public int CategoryId { get; set; }

        [Column(Name = "Cost")]
        public int Cost { get; set; }

        [Column(Name = "Content")]
        public string Content { get; set; }


    }
}