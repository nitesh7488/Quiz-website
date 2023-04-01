
//Question bank
var questionBank= [
    {
        question :'Which of the following is not an Output device?',
        option :['Scanner','Moniter','Printer','Speakers'],
        answer :'Scanner'
    },
    {
        question:'The popular Access Method for computer network is',
        option :['Ethernet','Token Ring','Bus Token','None'],
        answer :'Token Ring'
    },
    {
        question:'Which Company is the biggest player in the microprocessor industry  ?',
        option :['AMD','IBM','Motorola','Intel'],
        answer :'Intel'
    },
    { 
        question:'Which of the following memories needs refresh ?',
        option :['DRAM','ROM', 'SRAM','All of the above'],
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
        question:' The base of a binary number is-',
        option :[' 4',' 2','16','8'],
        answer :'2 '
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