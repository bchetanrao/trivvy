fetch('https://opentdb.com/api.php?amount=10&category=17&type=multiple')
        .then(response => response.json())
        .then(trivia => {
            console.log(trivia);
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
            
            document.getElementById("ques6").innerHTML = trivia.results[5].question;
            document.getElementById("opt6_1").innerHTML = trivia.results[5].correct_answer;
            document.getElementById("opt6_2").innerHTML = trivia.results[5].incorrect_answers[0];
            document.getElementById("opt6_3").innerHTML = trivia.results[5].incorrect_answers[1];
            document.getElementById("opt6_4").innerHTML = trivia.results[5].incorrect_answers[2];

            document.getElementById("ques7").innerHTML = trivia.results[6].question;
            document.getElementById("opt7_1").innerHTML = trivia.results[6].correct_answer;
            document.getElementById("opt7_2").innerHTML = trivia.results[6].incorrect_answers[0];
            document.getElementById("opt7_3").innerHTML = trivia.results[6].incorrect_answers[1];
            document.getElementById("opt7_4").innerHTML = trivia.results[6].incorrect_answers[2];

            document.getElementById("ques8").innerHTML = trivia.results[7].question;
            document.getElementById("opt8_1").innerHTML = trivia.results[7].correct_answer;
            document.getElementById("opt8_2").innerHTML = trivia.results[7].incorrect_answers[0];
            document.getElementById("opt8_3").innerHTML = trivia.results[7].incorrect_answers[1];
            document.getElementById("opt8_4").innerHTML = trivia.results[7].incorrect_answers[2];
        })
        var score = 0;
        // console.log(trivia.results[1].correct_answer);
        function correct(id){
            document.getElementById(id).style.backgroundColor = "#b0ddcd";
            score++;
        }
        function incorrect(id){
            document.getElementById(id).style.backgroundColor = "#fbe3e3";
        }
        function showScore(){
          document.getElementById("modal").style.display = "flex";
          if(score>8){
            score = 8;
          }
          document.getElementById("score").innerHTML = score;
          
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        var loader = document.getElementById("loader");

        window.addEventListener('load',()=>{
          setTimeout(hideLoader,3000);
        })
        function hideLoader(){
          loader.style.display = "none";
        }
