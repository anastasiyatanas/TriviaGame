

var startBtn
$('#start').on('click', function(){
  $('#start').remove();
})
var game = {
  questions:questions,
  currentQuestions:0,
  counter:30,
  correct:0,
  incorrect:0,
  
}

var questions = [
  {
      question: "According to Phoebe, what is a lobster?",
      answers: ["Something expensive you eat.", "A person whom another is meant to be with forever.", "A dance move.", "A slang word."],
      answer: "A person whom another is meant to be with forever."
  },
  {
      question: "What two people never get together romantically?",
      answers: ["Monica and Chandler.", "Joey and Rachel", "Joey and Phoebe", "Ross and Rachel"],
      answer: "Joey and Phoebe"
  },
  {
      question: "What was thefirst outfit we see Rachel in the pilot episode?",
      answers: ["A wedding dress.", "Jeans and a jacket.", "A red rain coat", "Her work uniform."],
      answer: "A wedding dress."
  },
  {
      question: "What does Chandler call his third nipple?",
      answers: ["a nubbin", "his special friend", "Robert", "a swollen beauty mark"],
      answer: "a nubbin"
  },
  {
      question: "Who's the first to find out about Monica and Chandler?",
      answers: ["Phoebe", "Ross", "Rachel", "Joey"],
      answer: "Joey"
  },    
  {
    question: "'WE WERE ON A BREAK!'",
    answers: ["Monica", "Ross", "Chandler", "Joey"],
    answer: "Ross"
}
];

function countDown(){
  game.counter;
  $('#counter').html(game.counter);
  if(game.counter<=0){
    console.log("You Done!"); 
    game.timeUp();
  }
}
function timeUp(){
  clearInterval(intervalId);
  submitGame();
  alert("You Done!");
  console.log("You Done!");
}
function stopTimer() {
  clearInterval(intervalId);
  submitGame();
}
function addQuestions() {
 $('.question-box').html("");
 for (var i=0; i=questions.length; i++){
   $('.question-box').append($("<h4>" + questions[i].question + "</h4>"));
   for (var k=0; k<questions[i].answers.length; k++) {
     $('.question-box').append($("<input type='radio' value='"+ questions[i].answers[k] + "' name=question-" + i + "'>"+ questions[i].answers[k]+ "<br>"));
   }
   $('.question-box').append('<hr>');
  }
}
   $('#subwrapper').append('<button class="answer-button"
   id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'"';
 
}

function shuffleQuestions(){
    questions.sort(function(a, b){return 0.5 - Math.random()});
}

function shuffleAnswers(){
  for (var i=0; i<questions.length; i++) {
    questions[i].answers.sort(function(a, b){return 0.5 - Math.random()});
  }
}

function submitGame() {
    for (var i=0; i<questions.length; i++)  {
        $.each($("input[name='question-" + i + "']:checked"), function() {
            console.log($(this).attr('value'));
            var userGuess = $(this).attr('value');
            if (userGuess === questions[i].answer) {
                console.log('correct');
                correct++;
            } else {
                console.log('incorrect');
                incorrect++;
            }
        });  
    }
    $('.correct').text(correct);
    $('.incorrect').text(incorrect);
    $('.end-screen').show();
}



  //   function runTimer() {
  //     counter = 10;
  //     clearInterval(intervalId);
  //     intervalId = setInterval(decrementTimer, 1000)
  // }
  
  //   // start: function() {
  //   //     timer = setInterval(game.countdown, 1000);
  //   // }
  //   $( "#start" ).click(function() {
  //     alert( "Handler for .click() called." );
  //   });
  // <button id="button1">
  //   <span id="choice1"></span>
  // </button>
  // <button id="button2">
  //   <span id="choice2"></span>
  // </button>
  // <button id="button3">
  //   <span id="choice3"></span>
  // </button>
  // <button id="button4">
  //   <span id="choice4"></span>
  // </button>
  