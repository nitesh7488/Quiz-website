var questionBank= [
    {
        question :'When was the first Common Wealth Games held?',
        option :['1930','1934','1938','1948'],
        answer :'1930'
    },
    {
        question:'In which sports is the participant called pugilist?',
        option :['Sprinter','Boxing','Wrestling','Javelin throw'],
        answer :'Boxing'
    },
    {
        question:'Champion Trophy is associated with ',
        option :['Chess',' Cricket','Hockey','Football'],
        answer :'Hockey'
    },
    { 
        question:'Arjuna Award was introduced in',
        option :['1961','1969','1972','1995'],
        answer :'1961'
    },
    {
        question:'Who was the first captain of Indian Test Team?',
        option :['Vijay Hazare','C.K. Nayudu','Lala Amarnath',' Vijay Merchant'],
        answer :'C.K. Nayudu'
    },
    {
        question:'In which city the Asian Games first took place?',
        option :['  New Delhi',' Tokyo',' Beijing','Kuall Lumpur'],
        answer :' New Delhi'
    },
    {
        question:' Which country hosted the 2014 Commonwealth Games?',
        option :['  Kenya','Canada','Scotland','New Zealand'],
        answer :'Scotland'
    },
    {
        question:'Which of the following cricketers has scored the highest total runs in Test Cricket?',
        option :['Sachin Tendulkar',' Donald Bradman',' Brian Lara',' Allan Border'],
        answer :'Sachin Tendulkar'
    },
    {
        question:'First Olympic Games were held in',
        option :[' 776 BC',' 798 BC','876 BC','898 BC'],
        answer :'776 BC'
    },
    {
        question:'Which of the following countries has not been a host of Asian Games',
        option :[' Pakistan','  Iran','Thailand',' Philippines'],
        answer :' Pakistan'
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