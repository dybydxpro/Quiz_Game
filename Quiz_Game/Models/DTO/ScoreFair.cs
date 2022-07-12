using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models.DTO
{
    public class ScoreFair
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Fair { get; set; }
    }
}
