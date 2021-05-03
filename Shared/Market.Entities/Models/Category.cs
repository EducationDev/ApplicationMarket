using System.Collections.Generic;

namespace Market.Entities.Models
{
    public class Category : IdentityBase
    {
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}