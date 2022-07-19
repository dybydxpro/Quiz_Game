using System.ComponentModel.DataAnnotations;

namespace Quiz_Game.Models
{
    public class Quiz
    {
        [Key]
        public int QuizID { get; set; }
        [Required]
        public string Question { get; set; }
        [Required]
        public string Q1 { get; set; }
        [Required]
        public string Q2 { get; set; }
        [Required]
        public string Q3 { get; set; }
        [Required]
        public string Q4 { get; set; }
        [Required]
        public int Correct { get; set; }
        [Required]
        public string Level { get; set; }
    }
}
