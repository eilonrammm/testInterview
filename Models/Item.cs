using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;


namespace TestInterview.Models
{
    public class Item
    {
        public int id;
        public string title;
        public bool type;
        public int seasons;
        public int views;
        public string image;
        public string description;
    }


}