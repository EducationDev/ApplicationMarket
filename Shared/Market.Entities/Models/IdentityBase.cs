using System.ComponentModel.DataAnnotations;

namespace Market.Entities.Models
{
    public class IdentityBase
    {
        [Key]
        public int Id { get; set; }
    }
}