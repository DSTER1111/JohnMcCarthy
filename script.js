var question = "When was John McCarthy born?";
var answers = ['Red', 'Green', 'Blue', 'Yellow'];
var answerButtons = document.getElementsByClassName('quizButton');
var correct = 3 ;

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question").innerHTML = question;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled',true);
    }
}
