using System.ComponentModel.DataAnnotations;

namespace Project1.Models
{
    public class Product
    {


        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }


        public string? Description { get; set; }

        [Required]
        public double Price { get; set; }
    }
}
