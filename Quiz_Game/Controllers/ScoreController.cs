using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz_Game.Data;
using Quiz_Game.Models;

namespace Quiz_Game.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {
        private readonly AppDatabaseContext _db;

        public ScoreController(AppDatabaseContext db)
        {
            _db = db;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> getMyScore(int id)
        {
            Score score = _db.Scores.Find(id);
            return Ok(score);
        }

        [HttpGet("Learning")]
        public async Task<ActionResult<List<AppDatabaseContext>>> getLearningScore(int id)
        {
            string query = "";
            var score = _db.Scores.FromSql(query).FirshOrDefault();
            return Ok(score);
        }
    }
}
