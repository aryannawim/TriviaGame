$(document).on("click", "button", nextquestion)


function nextquestion () {

			active = true;
			counter = setInterval(increment, 1000);
		
			$(".timer").html("<h3>Time Remaining: " + time + "</h3>");
			$(".question").html(questions[number].question);
			$(".choice1").html(questions[number].choice1);
			$(".choice2").html(questions[number].choice2);
			$(".choice3").html(questions[number].choice3);
			$(".choice4").html(questions[number].choice4);
			$(".pic").empty();

};

// $(".onclickchoice").on("click", function()  {


// 				if($(this).html() === questions[number].correct){

// 						numbercorrect++;
// 						correctAnswer();
						
// 				}
// 				else{

// 						numberwrong++;
// 						wrongAnswer();
						
// 				}
// 					stop();

// });
$(document).ready(function () {






$(document).on("click", ".onclickchoice", function()  {

		if(active){
				if($(this).html() === questions[number].correct){

						numbercorrect++;
						correctAnswer();
						
				}
				else{

						numberwrong++;
						wrongAnswer();
						
				}
					stop();
			}

}); 



});


function correctAnswer(){

 	$(".question").html("<p>Correct!</p>");
	$(".pic").html("<p>" + questions[number].image + "</p>");



};

function wrongAnswer(){

	$(".question").html("<p>Incorrect ... The correct answer was: " + questions[number].correct + "</p>");
	$(".pic").html("<p>"+questions[number].image+"</p>");




};

function stop(){

		active = false;
		clearInterval(counter);
		time = 30;
		number++;
		if (number >= questions.length){

			setTimeout(endgame, 6000);
		}
		else{

			setTimeout(nextquestion, 6000);
		}



};

function increment(){



			
			$(".timer").html("<h3>Time Remaining: " + time + "</h3>");
			if (time <= 0){

			
				timeOut();
				stop();
		

			}
			else{

				time --;

			}

};


function timeOut(){



		numbertimeout++;
		$(".question").html("<p>Time has expired... The correct answer was: " + questions[number].correct+"</p>");
		$(".pic").html("<p>" + questions[number].image + "</p>");



};

function endgame(){



	$(".question").html("<h3>You got " + numbercorrect + " answers right!</h3>"
		+ "<h3>You got " + numberwrong + " incorrect</h3>" + "<h3>You didn't answer " + numbertimeout + " questions.</h3>");


	$(".onclickchoice").empty();
	$(".timer").empty();
	$(".pic").empty();

	number = 0;
	numbercorrect = 0;
	numberwrong = 0;
	numbertimeout = 0;






};

var q1 = {

		question: "In Pulp Fiction, the shot of Marcellus turning his head to see Butch in his car is taken from directly from what movie?",
		choice1: "Psycho",
		choice2: "Citizen Kane",
		choice3: "Mad Max",
		choice4: "Casablanca",
		correct: "Psycho",
		image: "<img src='assets/images/ving.gif'>"

		};

var q2 = {

		question: "During the final card game at the LaLouisiane tavern in Inglorious Basterds, what does Hellstrom's card say?",
		choice1: "Hitler",
		choice2: "Godzilla",
		choice3: "FDR",
		choice4: "King Kong",
		correct: "King Kong",
		image: "<img src='assets/images/kong.gif'>"

		};

var q3 = {

		question: "This line is said in both Reservoir Dogs and From Dusk Til Dawn?",
		choice1: "Does he look like a bitch?",
		choice2: "You shoot me in a dream, you better wake up and apologize",
		choice3: "All right ramblers, let's get rambling",
		choice4: "My ass may be dumb, but I ain't no dumbass",
		correct: "All right ramblers, let's get rambling",
		image: "<img src='assets/images/rdogs.gif'>"

		};


var q4 = {

		question: "In Reservoir Dogs, Mr. Orange has a poster of what superhero on his wall?",
		choice1: "Superman",
		choice2: "Batman",
		choice3: "Silver Surfer",
		choice4: "Captian America",
		correct: "Silver Surfer",
		image: "<img src='assets/images/surfer.gif'>"

		};

var q5 = {

		question: "Jackie in Jackie Brown and Butch in Pulp Fiction both use the same white Honda Civic also seen in the My Oh My strip club in which movie?",
		choice1: "Kill Bill Vol.2",
		choice2: "Kill Bill Vol.1",
		choice3: "Reservoir Dogs",
		choice4: "Death Proof",
		correct: "Kill Bill Vol.2",
		image: "<img src='assets/images/uma.gif'>"

		};

var q6 = {

		question: "What's the only Tarantino movie that runs in chronological order?",
		choice1: "Pulp Fiction",
		choice2: "Kill Bill",
		choice3: "Death Proof",
		choice4: "Django Unchained",
		correct: "Death Proof",
		image: "<img src='assets/images/death.gif'>"

		};

var q7 = {

		question: "What was the original name Tarantino wanted for Inglorious Basterds?",
		choice1: "Once Upon a Time in Nazi Occupied France",
		choice2: "Nein",
		choice3: "If a Rat Were to Walk In",
		choice4: "Say Auf Wiedersehen to Your Nazi Balls",
		correct: "Once Upon a Time in Nazi Occupied France",
		image: "<img src='assets/images/basterd.gif'>"

		};

var q8 = {

		question: "In Reservoir Dogs, the empty rendezvous building was actually a disused...?",
		choice1: "YMCA",
		choice2: "Mortuary",
		choice3: "Homeless shelter",
		choice4: "Recycling Center",
		correct: "Mortuary",
		image: "<img src='assets/images/rdogs2.gif'>"

		};

var q9 = {

		question: "The original screenplay to Django Unchained had a character edited out named Scotty. Who was cast as him?",
		choice1: "Sacha Baron Cohen",
		choice2: "Kurt Russel",
		choice3: "Brad Pitt",
		choice4: "Johan Hill",
		correct: "Sacha Baron Cohen",
		image: "<img src='assets/images/borat.gif'>"

		};

var q10 = {

		question: "Tarantino wrote this original screenplay and sold it to Tony Scott in 1993?",
		choice1: "Tombstone",
		choice2: "True Romance",
		choice3: "Dazed and Confused",
		choice4: "In the Line of Fire",
		correct: "True Romance",
		image: "<img src='assets/images/trueromance.jpg'>"

		};


// initialization variables. 
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var number = 0 ; 
var numbercorrect = 0 ;
var numberwrong = 0 ; 
var numbertimeout = 0; 
var time = 30 ; 
var counter;
var active;