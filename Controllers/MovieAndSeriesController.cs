using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestInterview.Models;

namespace TestInterview.Controllers
{
    public class MovieAndSeriesController : ApiController
    {
        [HttpGet()]
        [ActionName("GetLocations")]
        public IEnumerable<Models.Item> GetLocations()
        {
            System.Threading.Thread.Sleep(1000);
            List<Models.Item> items = new List<Models.Item>();
            
            items = new List<Models.Item>();
            SqlConnection sqlCon = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB; AttachDbFilename=C:\Users\eilon\Documents\Visual Studio 2015\Projects\שאלה 4\TestInterview\TestInterview\App_Data\MoviesAndSeries.mdf; Integrated Security=True");
            SqlDataAdapter dataAdap = new SqlDataAdapter("Select * from Items", sqlCon);
            DataTable dt = new DataTable();
            dataAdap.Fill(dt);
            foreach(DataRow row in dt.Rows)
            {
                var i = new Item();
                i.id = int.Parse(row["Id"].ToString());
                i.title = row["Title"].ToString();
                i.type = bool.Parse(row["Type"].ToString());
                i.seasons = int.Parse(row["Seasons"].ToString());
                i.views = int.Parse(row["Views"].ToString());
                i.image = row["Image"].ToString();
                i.description = row["Description"].ToString();
                items.Add(i);
            }
  
            return items;
        }
    }
}