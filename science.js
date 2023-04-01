var questionBank= [
    {
        question :'Which of the following are the main states of matter?',
        option :['Liquid, Solid, Foam','Liquid, Gas, Gel','Liquid, Solid, Gas','Liquid, Foam, Gel'],
        answer :'Liquid, Solid, Foam'
    },
    {
        question:'In which case the matter intermolecular force is stronger?',
        option :['Solid','Liquid','Gas','Plasma'],
        answer :'Solid'
    },
    {
        question:'Which of the following process converts solid into gas?',
        option :['Sublimation','Vaporization','Deposition','Fusion'],
        answer :'Sublimation'
    },
    { 
        question:'Which of the following substance is present in large quantities in the solution?',
        option :['Solute','Solvent','Water','Benzene'],
        answer :'Solvent'
    },
    {
        question:'Name the scientist who gives the law of constant proportions?',
        option :['Newton','Lavoisier','Dalton','Proust'],
        answer :'Proust'
    },
    {
        question:' What is the atomic number of sodium (Na)?',
        option :[' 10',' 23.5','18','11'],
        answer :'11'
    },
    {
        question:' Which of the following formula is correct about magnesium chloride?',
        option :[' MgCl',' MgCl2','MgCl3','MgCl4'],
        answer :'MgCl2'
    },
    {
        question:'What is the molecular mass of the H2O?',
        option :['10',' 12',' 16','18'],
        answer :' 18'
    },
    {
        question:'What is the valency of oxygen?',
        option :['  1',' 65','2','16'],
        answer :'2'
    },
    {
        question:'Name the basic or structural unit of the human body?',
        option :[' Neuron','Nephron','Cell','Tissue'],
        answer :'Cell'
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