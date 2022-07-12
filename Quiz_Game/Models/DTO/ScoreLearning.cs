using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models.DTO
{
    public class ScoreLearning
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Learning { get; set; }
    }
}
