fetch('https://opentdb.com/api.php?amount=8&category=9&difficulty=easy&type=multiple')
        .then(response => response.json())
        .then(trivia => {
            // console.log(trivia);
            document.getElementById("ques1").innerHTML = trivia.results[0].question;
            document.getElementById("opt1_1").innerHTML = trivia.results[0].correct_answer;
            document.getElementById("opt1_2").innerHTML = trivia.results[0].incorrect_answers[0];
            document.getElementById("opt1_3").innerHTML = trivia.results[0].incorrect_answers[1];
            document.getElementById("opt1_4").innerHTML = trivia.results[0].incorrect_answers[2];

            document.getElementById("ques2").innerHTML = trivia.results[1].question;
            document.getElementById("opt2_1").innerHTML = trivia.results[1].correct_answer;
            document.getElementById("opt2_2").innerHTML = trivia.results[1].incorrect_answers[0];
            document.getElementById("opt2_3").innerHTML = trivia.results[1].incorrect_answers[1];
            document.getElementById("opt2_4").innerHTML = trivia.results[1].incorrect_answers[2];

            document.getElementById("ques3").innerHTML = trivia.results[2].question;
            document.getElementById("opt3_1").innerHTML = trivia.results[2].correct_answer;
            document.getElementById("opt3_2").innerHTML = trivia.results[2].incorrect_answers[0];
            document.getElementById("opt3_3").innerHTML = trivia.results[2].incorrect_answers[1];
            document.getElementById("opt3_4").innerHTML = trivia.results[2].incorrect_answers[2];

            document.getElementById("ques4").innerHTML = trivia.results[3].question;
            document.getElementById("opt4_1").innerHTML = trivia.results[3].correct_answer;
            document.getElementById("opt4_2").innerHTML = trivia.results[3].incorrect_answers[0];
            document.getElementById("opt4_3").innerHTML = trivia.results[3].incorrect_answers[1];
            document.getElementById("opt4_4").innerHTML = trivia.results[3].incorrect_answers[2];

            document.getElementById("ques5").innerHTML = trivia.results[4].question;
            document.getElementById("opt5_1").innerHTML = trivia.results[4].correct_answer;
            document.getElementById("opt5_2").innerHTML = trivia.results[4].incorrect_answers[0];
            document.getElementById("opt5_3").innerHTML = trivia.results[4].incorrect_answers[1];
            document.getElementById("opt5_4").innerHTML = trivia.results[4].incorrect_answers[2];
            
            
        })
        // console.log(trivia.results[1].correct_answer);
        function correct(id){
            document.getElementById(id).style.backgroundColor = "#b0ddcd";
            // console.log("func is working");
        }
        function incorrect(id){
            document.getElementById(id).style.backgroundColor = "#fbe3e3";
        }
