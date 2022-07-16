using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz_Game.Data;
using Quiz_Game.Models;
using Quiz_Game.Models.DTO;

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
            List<Score> data = _db.Scores.Where(x => x.UserId == id).ToList();
            Score score = new Score();
            score.ScoreId = data[0].ScoreId;
            score.UserId = data[0].UserId;
            score.Learning = data[0].Learning;
            score.Fair = data[0].Fair;
            score.Good = data[0].Good;
            score.Expert = data[0].Expert;

            return Ok(score);
        }

        [HttpGet("Learning")]
        public async Task<ActionResult<List<AppDatabaseContext>>> getLearningScore()
        {
            List<Score> obj = _db.Scores.ToList();
            int n = obj.Count;
            for (int i = 1; i < n; ++i)
            {
                int ScoreIdKey = obj[i].ScoreId;
                int UserIdKey = obj[i].UserId;
                int LearningKey = obj[i].Learning;
                int FairKey = obj[i].Fair;
                int GoodKey = obj[i].Good;
                int ExpertKey = obj[i].Expert;

                int j = i - 1;

                while (j >= 0 && obj[j].Learning < LearningKey)
                {
                    obj[j + 1].ScoreId = obj[j].ScoreId;
                    obj[j + 1].UserId = obj[j].UserId;
                    obj[j + 1].Learning = obj[j].Learning;
                    obj[j + 1].Fair = obj[j].Fair;
                    obj[j + 1].Good = obj[j].Good;
                    obj[j + 1].Expert = obj[j].Expert;

                    j = j - 1;
                }
                obj[j + 1].ScoreId = ScoreIdKey;
                obj[j + 1].UserId = UserIdKey;
                obj[j + 1].Learning = LearningKey;
                obj[j + 1].Fair = FairKey;
                obj[j + 1].Good = GoodKey;
                obj[j + 1].Expert = ExpertKey;
            }
            return Ok(obj);
        }

        [HttpGet("Fair")]
        public async Task<ActionResult<List<AppDatabaseContext>>> getFairScore()
        {
            List<Score> obj = _db.Scores.ToList();
            int n = obj.Count;
            for (int i = 1; i < n; ++i)
            {
                int ScoreIdKey = obj[i].ScoreId;
                int UserIdKey = obj[i].UserId;
                int LearningKey = obj[i].Learning;
                int FairKey = obj[i].Fair;
                int GoodKey = obj[i].Good;
                int ExpertKey = obj[i].Expert;

                int j = i - 1;

                while (j >= 0 && obj[j].Fair < FairKey)
                {
                    obj[j + 1].ScoreId = obj[j].ScoreId;
                    obj[j + 1].UserId = obj[j].UserId;
                    obj[j + 1].Learning = obj[j].Learning;
                    obj[j + 1].Fair = obj[j].Fair;
                    obj[j + 1].Good = obj[j].Good;
                    obj[j + 1].Expert = obj[j].Expert;

                    j = j - 1;
                }
                obj[j + 1].ScoreId = ScoreIdKey;
                obj[j + 1].UserId = UserIdKey;
                obj[j + 1].Learning = LearningKey;
                obj[j + 1].Fair = FairKey;
                obj[j + 1].Good = GoodKey;
                obj[j + 1].Expert = ExpertKey;
            }
            return Ok(obj);
        }

        [HttpGet("Good")]
        public async Task<ActionResult<List<AppDatabaseContext>>> getGoodScore()
        {
            List<Score> obj = _db.Scores.ToList();
            int n = obj.Count;
            for (int i = 1; i < n; ++i)
            {
                int ScoreIdKey = obj[i].ScoreId;
                int UserIdKey = obj[i].UserId;
                int LearningKey = obj[i].Learning;
                int FairKey = obj[i].Fair;
                int GoodKey = obj[i].Good;
                int ExpertKey = obj[i].Expert;

                int j = i - 1;

                while (j >= 0 && obj[j].Good < GoodKey)
                {
                    obj[j + 1].ScoreId = obj[j].ScoreId;
                    obj[j + 1].UserId = obj[j].UserId;
                    obj[j + 1].Learning = obj[j].Learning;
                    obj[j + 1].Fair = obj[j].Fair;
                    obj[j + 1].Good = obj[j].Good;
                    obj[j + 1].Expert = obj[j].Expert;

                    j = j - 1;
                }
                obj[j + 1].ScoreId = ScoreIdKey;
                obj[j + 1].UserId = UserIdKey;
                obj[j + 1].Learning = LearningKey;
                obj[j + 1].Fair = FairKey;
                obj[j + 1].Good = GoodKey;
                obj[j + 1].Expert = ExpertKey;
            }
            return Ok(obj);
        }

        [HttpGet("Expert")]
        public async Task<ActionResult<List<AppDatabaseContext>>> getExpertScore()
        {
            List<Score> obj = _db.Scores.ToList();
            int n = obj.Count;
            for (int i = 1; i < n; ++i)
            {
                int ScoreIdKey = obj[i].ScoreId;
                int UserIdKey = obj[i].UserId;
                int LearningKey = obj[i].Learning;
                int FairKey = obj[i].Fair;
                int GoodKey = obj[i].Good;
                int ExpertKey = obj[i].Expert;

                int j = i - 1;

                while (j >= 0 && obj[j].Expert < ExpertKey)
                {
                    obj[j + 1].ScoreId = obj[j].ScoreId;
                    obj[j + 1].UserId = obj[j].UserId;
                    obj[j + 1].Learning = obj[j].Learning;
                    obj[j + 1].Fair = obj[j].Fair;
                    obj[j + 1].Good = obj[j].Good;
                    obj[j + 1].Expert = obj[j].Expert;

                    j = j - 1;
                }
                obj[j + 1].ScoreId = ScoreIdKey;
                obj[j + 1].UserId = UserIdKey;
                obj[j + 1].Learning = LearningKey;
                obj[j + 1].Fair = FairKey;
                obj[j + 1].Good = GoodKey;
                obj[j + 1].Expert = ExpertKey;
            }
            return Ok(obj);
        }

        [HttpPut]
        public async Task<ActionResult<List<AppDatabaseContext>>> setLearningScore(Score obj)
        {
            if (ModelState.IsValid)
            {
                _db.Scores.Update(obj);
                await _db.SaveChangesAsync();
                return Ok(obj);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
