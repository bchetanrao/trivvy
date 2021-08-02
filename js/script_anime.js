fetch('https://opentdb.com/api.php?amount=10&category=31&type=multiple')
        .then(response => response.json())
        .then(trivia => {
            // console.log(trivia);
           var i=1;
           trivia.results.forEach(curr => {
             let html = '<div class="block">';
             html+=`<label>${i} of 8</label><h2 id="ques1">${curr.question}</h2>`;
             html+=`<button id="opt1_1" onclick="correct(this.id)">${curr.correct_answer}</button>`;
             html+=`<button id="opt1_2" onclick="incorrect(this.id)">${curr.incorrect_answers[0]}</button>`;
             html+=`<button id="opt1_3" onclick="incorrect(this.id)">${curr.incorrect_answers[1]}</button>`;
             html+=`<button id="opt1_4" onclick="incorrect(this.id)">${curr.incorrect_answers[2]}</button>`;
             html+=`</div>`;
             document.querySelector('.paper').innerHTML+=html;
             i++;
           });
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