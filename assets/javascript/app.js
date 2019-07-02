$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'How many rings does Lebron James have?',
        possibleAnswers: ['A. Six',
            'B. Zero',
            'C. Three',
            'D. Four'],
        flags: [false, false, true, false],
        answer: 'C. Three'
    };

    var q2 = {
        question: 'What year was Lebron James drafted #1 overall to the Cleveland Cavaliers?',
        possibleAnswers: ['A. 2002',
            'B. 2003',
            'C. 2004',
            'D. 2005'],
        flags: [false, true, false, false],
        answer: '2003'
    };

    var q3 = {
        question: 'Which season did Lebron James win his first and only NBA scoring title?',
        possibleAnswers: ['A. 05-06',
            'B. 07-08',
            'C. 08-09',
            'D. 06-07'],
        flags: [false, true, false, false],
        answer: '07-08'
    };

    var q4 = {
        question: 'What High School did Lebron Attend?',
        possibleAnswers: ['A. St. Vincent-St. Mary ',
            'B. Westlake',
            'C. Therrell',
            'D. Oak Hill Acacdemy'],
        flags: [true, false, false, false],
        answer: 'A. St. Vincent-St. Mary'
    };

    var q5 = {
        question: 'What number was Lebron James drafted into the NBA?',
        possibleAnswers: ['A. Third',
            'B. First',
            'C. Fifteenth',
            'D. Fourth'],
        flags: [false, true, false, false],
        answer: 'B. First'
    };

    var q6 = {
        question: ' LeBron James was ranked what number on Ohio all-time list of scorers, when he left the team?',
        possibleAnswers: ['A. Third',
            'B. First',
            'C. Second',
            'D. Fourth'],
        flags: [true, false, false, false],
        answer: 'A. Third'
    };

    var q7 = {
        question: 'What college did LeBron James attend?',
        possibleAnswers: ['A. Fort Valley State University',
            'B. University of South Carolina',
            'C. He didnt attend college',
            'D. Florida State University'],
        flags: [false, false, true, false],
        answer: 'C. He didnt attend college'
    };

    var q8 = {
        question: 'What is the least number of points LeBron had scored in a game?',
        possibleAnswers: ['A. Seven',
            'B. Eight',
            'C. Sixteen',
            'D. None of the above'],
        flags: [false, true, false, false],
        answer: 'B. Pleasure Island'
    };

    var q9 = {
        question: 'What was LeBrons nickname in high school?',
        possibleAnswers: ['A. The GOAT',
            'B. The Brow',
            'C. The Dark Knight',
            'D. The Chosen One'],
        flags: [false, false, false, true],
        answer: 'D. The Chosen One'
    };

    var q10 = {
        question: 'What number did he wear in the NBA in 2003?',
        possibleAnswers: ['A. Twenty Two',
            'B. Twenty Three',
            'C. Twenty Four',
            'D. Twenty Five'],
        flags: [false, true, false, false],
        answer: 'B. Twenty Three'
    }

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
       
    }

   

    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {

        //  nextQuestion();
        $('.answerchoice').on('click', function () {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }

    setup();
    $('.answerchoice').on('click', function () {
        console.log($(this));
        if (this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if (this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });



});