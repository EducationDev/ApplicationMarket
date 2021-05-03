using System;

namespace Market.Entities.Models
{
    public class Cart : IdentityBase
    {
        public string CartId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
        public DateTime DateCreated { get; set; }
        public virtual Product Product { get; set; }
    }
}