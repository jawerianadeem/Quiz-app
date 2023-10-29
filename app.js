
var displayQuestion = document.getElementById("displayQuestion");
var optionParent = document.getElementById("optionParent");
var currentQuestionNumber = document.getElementById("currentQuestionNumber")
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var quizDisplay = document.getElementById("quizDisplay");
var resultDisplay = document.getElementById("resultDisplay");
var percentage = document.getElementById("percentage");
var indexValue = 0;  
var marks = 0; 

var questions = [
    {
        question:"1:Html Stands For _______________________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"2:Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"3:Js Stands For _______________________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"4:Dom Stands For _______________________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"5:Ram Stands For _______________________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"6:Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];

function showQuestion(){
    displayQuestion.innerHTML = questions[indexValue].question;
    for(var i = 0; i<questions[indexValue].options.length; i++){
        var optValue = questions[indexValue].options[i];
        var corrValue = questions[indexValue].correctAns;

        optionParent.innerHTML += 
        `<div class="col-md-6 my-3">
            <button onclick="checkQuestion('${optValue}' , '${corrValue}')" class="btn p-3 w-100 txtPrimary rounded-pill shadow fw-bold d-block" style="background-color: #FFEDED;">
            ${questions[indexValue].options[i]}
            </button>
        </div>` 
    }
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexValue + 1;
}
showQuestion();

function nextQuestion(){
    optionParent .innerHTML = "";
    if(indexValue + 1 == questions.length){
        resultDisplay.style.display = 'block';
        quizDisplay.style.display = 'none';

        var totalPercentage = (marks/questions.length)*100;
        percentage.innerHTML = totalPercentage.toFixed(2);

    } else {
    indexValue++;
    showQuestion();
    }
}

function checkQuestion(optionValue, correctValue){
    if(optionValue == correctValue){
        marks++;
        console.log(marks);
    }
    nextQuestion();
};
