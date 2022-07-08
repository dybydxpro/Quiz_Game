using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz_Game.Data;
using Quiz_Game.Models;
using Quiz_Game.Models.DTO;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Quiz_Game.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDatabaseContext _db;

        public UserController(AppDatabaseContext db)
        {
            _db = db;
        }

        [HttpPost("Login")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Login(Login obj)
        {
            List<User> users = _db.Users.Where(x => x.Email == obj.Email).ToList();
            if(users.Count == 0)
            {
                return NoContent();
            }

            if (users[0].Password == obj.Password)
            {
                User usr = new User();
                usr.UserId = users[0].UserId;
                usr.Firstname = users[0].Firstname;
                usr.Lastname = users[0].Lastname;
                usr.Email = users[0].Email; 
                usr.Password = "";
                usr.Gender = users[0].Gender;
                usr.DOB = users[0].DOB;
                return Ok(usr);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost("Register")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Register(User obj)
        {
            if (ModelState.IsValid)
            {
                List<User> users = _db.Users.Where(x => x.Email == obj.Email).ToList();
                if (users.Count != 0)
                {
                    return BadRequest();
                }
                else
                {
                    _db.Users.Add(obj);
                    await _db.SaveChangesAsync();

                    List<User> usr = _db.Users.Where(x => x.Email == obj.Email).ToList();
                    int id = usr[0].UserId;
                    RegisterToScore(id);
                    return Ok();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<ActionResult<List<AppDatabaseContext>>> RegisterToScore(int id)
        {
            Score score = new Score();
            score.ScoreId = 0;
            score.UserId = id;
            score.Learning = 0;
            score.Fair = 0;
            score.Good = 0;
            score.Expert = 0;

            _db.Scores.Add(score);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
