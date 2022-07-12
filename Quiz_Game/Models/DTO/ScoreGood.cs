using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models.DTO
{
    public class ScoreGood
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Good { get; set; }
    }
}
