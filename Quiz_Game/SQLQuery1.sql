SELECT * FROM Quizzes;

INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('What does ROM stand for in IT?', 'Read Only memory', 'Repeat Only Memory', 'Record on Movement', 'Receive On Main server', 1, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Who owns microsoft office?', 'Mr Musle', 'WazHD', 'Bob', 'Bill Gates', 4, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('What does GB stand for?', 'Giantbyte', 'Gigabyte', 'Giagabyte', 'Giggabyte', 2, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Which Type Of Computer Is Portable?', 'Destop', 'Tower', 'Booktop', 'Laptop', 4, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Who developed Facebook?', 'Steve Jobs', 'Bill Gates', 'Mark Zucherberg', 'Michael Dell', 3, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Which Of The Software Packages Below Prevents Virus Infections?', 'Internet Explorer', 'Silverlight', 'AVG', 'Spybot', 3, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('What is BIOS short for?', 'Big Input/Output System', 'Basic Input/Output System', 'Binary Input/Output System', 'Banned Input/Output System', 2, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Which is a computer network that connects computers within a limited area such as a home, school, computer laboratory, or office building, using network media', 'LAN', 'WAN', 'MAN', 'NET', 1, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Which Device Converts 120Volt AC From Your Wall To 12VDC for your computer to use?', 'Motherboard', 'Power Supply', 'CPU', 'Flux Capacitor', 2, 'Learning');
INSERT INTO Quizzes(Question, Q1, Q2, Q3, Q4, Correct, Level) VALUES('Which is not a part of a Personal Computer (PC)?', 'CPU', 'Mouse', 'Remote', 'Keyboard', 3, 'Learning');

UPDATE Quizzes SET Question = 'Who owns microsoft office?' WHERE QuizID = 2;