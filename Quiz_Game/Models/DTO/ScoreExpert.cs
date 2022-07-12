using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models.DTO
{
    public class ScoreExpert
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Expert { get; set; }
    }
}
