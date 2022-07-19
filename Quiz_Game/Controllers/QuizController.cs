using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz_Game.Data;
using Quiz_Game.Models;

namespace Quiz_Game.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly AppDatabaseContext _db;

        public QuizController(AppDatabaseContext db)
        {
            _db = db;
        }

        [HttpGet("{level}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> GetQuestions(string level)
        {
            Random rnd = new Random();
            List<Quiz> quizzes = _db.Quizzes.Where(x => x.Level == level).ToList();
            int count = quizzes.Count;
            int id = rnd.Next(0, count-1);

            Quiz quiz = new Quiz();
            quiz.QuizID = quizzes[id].QuizID;
            quiz.Question = quizzes[id].Question;
            quiz.Q1 = quizzes[id].Q1;
            quiz.Q2 = quizzes[id].Q2;
            quiz.Q3 = quizzes[id].Q3;
            quiz.Q4 = quizzes[id].Q4;
            quiz.Correct = quizzes[id].Correct;
            quiz.Level = quizzes[id].Level;

            return Ok(quiz);
        }
    }
}
