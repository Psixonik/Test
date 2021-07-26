using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Anonim
    {
        public int Id { get; set; }

        public string AdType { get; set; }

        public string Category { get; set; }

        public int Cost { get; set; }

        public string Content { get; set; }

        public Anonim(int id, string adType, string category, int cost, string content)
        {
            Id = id;
            AdType = adType;
            Category = category;
            Cost = cost;
            Content = content;
        }

        public Anonim()
        {
        }
    }
}