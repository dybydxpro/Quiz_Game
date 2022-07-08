using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models
{
    public class Score
    {
        [Key]
        public int ScoreId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Learning { get; set; }
        [Required]
        public int Fair { get; set; }
        [Required]
        public int Good { get; set; }
        [Required]
        public int Expert { get; set; }
    }
}
