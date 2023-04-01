var questionBank= [
    {
        question :'Which of the following type of class allows only one object of it to be created?',
        option :['Virtual class','Abstract class','Singleton class','Friend class'],
        answer :'Singleton class'
    },
    {
        question:'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
        option :['120 metres','180 metres','324 metres','150 metres'],
        answer :'150 metres'
    },
    {
        question:'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
        option :['200 m','225 m','245 m','250 m'],
        answer :'245 m'
    },
    { 
        question:'What are the types of linkages?',
        option :['Internal and External','External, Internal and None','External and None','Internal'],
        answer :'External, Internal and None'
    },
    {
        question:'ICICI is the name of a',
        option :['chemical industry','bureau','corporation','financial institution'],
        answer :'financial institution'
    },
    {
        question:' What does CSS stand for?',
        option :[' Creative Style Sheets',' Colorful Style Sheets','Cascading Style Sheets','Computer Style Sheets'],
        answer :'Cascading Style Sheets'
    },
    {
        question:' The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:',
        option :[' 2.3 m',' 4.6 m','7.8 m','9.2 m'],
        answer :'9.2 m'
    },
    {
        question:'World Wide Web is being standard by',
        option :['Worldwide corporation',' W3C',' World Wide Consortium','World Wide Web Standard'],
        answer :' W3C'
    },
    {
        question:'If the displayed system time and date is wrong, you can reset it using',
        option :['  Write',' Calendar','Write file','Control panel'],
        answer :'Control panel'
    },
    {
        question:'Which is the latest version of MS Windows?',
        option :[' Windows 2007',' Windows 7','Windows 11','Windows 10'],
        answer :'Windows 11'
    },
    
    
    
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();