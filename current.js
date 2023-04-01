//Question bank
var questionBank= [
    {
        question :'With which company, ISRO signed a contract to train Indian astronauts for Gaganyaan?',
        option :['CNES','Glavcosmos','SSAU Ukraine','NADA'],
        answer :'Glavcosmos'
    },
    {
        question:'Which country has been elected to the Inter-governmental Committee of UNESCO s 2003 Convention ?',
        option :['Italy','India','Turkey','Egypt'],
        answer :'India'
    },
    {
        question:'Which company has appointed actress Rashmika Mandana as its brand ambassador?',
        option :['Burgar King','Kings wallest','McDonalds','Kings Corner'],
        answer :'McDonalds'
    },
    { 
        question:'Which state has renamed the dragon fruit as Kamalam?',
        option :['Assam','Gujarat', 'Tripura','Goa'],
        answer :'Gujarat'
    },
    {
        question:'In which state it has been declared a natural disaster due to heavy snowfall?',
        option :['Jammu and Kashmir','Punjab','Rajasthan','Madhya Pradesh'],
        answer :'Jammu and Kashmir'
    },
    {
        question:' Which state government has recently launched a scheme called Ghar Ghar Ration?',
        option :[' Madhya Pradesh',' Delhi','Uttar Pradesh','Punjab'],
        answer :'Delhi'
    },
    {
        question:' Which state government has recently launched a scheme called Ghar Ghar Ration?',
        option :[' Madhya Pradesh',' Delhi','Uttar Pradesh','Punjab'],
        answer :'Delhi'
    },
    {
        question:'Who has become the first women umpire to officiate mens test match?',
        option :['Kim Cotton',' Lauren Agenbag',' Sue Redfern','Claire Polosak'],
        answer :'Claire Polosak'
    },
    {
        question:'Recently, famous personality Saroj Khan has passed away, was she?',
        option :['  Choreographer',' actress','Scientist','Former Chief Minister'],
        answer :'Choreographer'
    },
    {
        question:'Who has been given the additional charge as CFO of SBI?',
        option :['V Ramachandra',' Chalasani Venkat Nageswar','A. Ramesh','Sunil Gurbaxani'],
        answer :'Chalasani Venkat Nageswar'
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