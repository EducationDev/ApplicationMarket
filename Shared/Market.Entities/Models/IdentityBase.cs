using System.ComponentModel.DataAnnotations;

namespace Market.Entities.Models
{
    public class IdentityBase
    {
        [Key]
        [ScaffoldColumn(false)]
        public int Id { get; set; }
    }
}