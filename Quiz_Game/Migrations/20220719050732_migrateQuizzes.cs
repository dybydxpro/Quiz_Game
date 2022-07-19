using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quiz_Game.Migrations
{
    public partial class migrateQuizzes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Quizzes",
                columns: table => new
                {
                    QuizID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Q1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Q2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Q3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Q4 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Correct = table.Column<int>(type: "int", nullable: false),
                    Level = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quizzes", x => x.QuizID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Quizzes");
        }
    }
}
