using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models.DTO
{
    public class Login
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
