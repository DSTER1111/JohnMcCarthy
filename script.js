//Question 1
var question1 = "1. When was John McCarthy born?";
var answers1 = ['1927', '1928', '1929', '1930'];
var answerButtons1 = document.getElementsByClassName('quizButton1');
var correct1 = 0 ;

for(var spot=0; spot<answers1.length; spot++)
{
    answerButtons1[spot].innerHTML = answers1[spot];

    answerButtons1[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers1[correct1]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question1").innerHTML = question1;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons1.length; num++) {
        answerButtons1[num].setAttribute('disabled',true);
    }
}

//Question 2
var question2 = "2. Where did John McCarthy get his Ph.D from?";
var answers2 = ['He stole it', 'Harvard', 'Stanford', 'Princeton'];
var answerButtons2 = document.getElementsByClassName('quizButton2');
var correct2 = 3 ;

for(var spot=0; spot<answers2.length; spot++)
{
    answerButtons2[spot].innerHTML = answers2[spot];

    answerButtons2[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers2[correct2]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question2").innerHTML = question2;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons2.length; num++) {
        answerButtons2[num].setAttribute('disabled',true);
    }
}

//Question 3
var question3 = "3. What was John McCarthys nickname?";
var answers3 = ['Big John', 'Uncle John', 'Mac', 'John "The Cart" McCarthy'];
var answerButtons3 = document.getElementsByClassName('quizButton3');
var correct3 = 1 ;

for(var spot=0; spot<answers3.length; spot++)
{
    answerButtons3[spot].innerHTML = answers3[spot];

    answerButtons3[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers3[correct3]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question3").innerHTML = question3;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons3.length; num++) {
        answerButtons3[num].setAttribute('disabled',true);
    }
}

//Question 4
var question4 = "4. What year did John coin the term 'Artificial Intelligence'?";
var answers4 = ['1950', 'He Didnt','1955', '1960'];
var answerButtons4 = document.getElementsByClassName('quizButton4');
var correct4 = 2 ;

for(var spot=0; spot<answers4.length; spot++)
{
    answerButtons4[spot].innerHTML = answers4[spot];

    answerButtons4[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers4[correct4]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question4").innerHTML = question4;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons4.length; num++) {
        answerButtons4[num].setAttribute('disabled',true);
    }
}

//Question 5
var question5 = "5. How old was john when he died?";
var answers5 = ['72', '78', '84', '93'];
var answerButtons5 = document.getElementsByClassName('quizButton5');
var correct5 = 2 ;

for(var spot=0; spot<answers5.length; spot++)
{
    answerButtons5[spot].innerHTML = answers5[spot];

    answerButtons5[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers5[correct5]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question5").innerHTML = question5;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons5.length; num++) {
        answerButtons5[num].setAttribute('disabled',true);
    }
}

//Question 6
var question6 = "6. What is Johns hometown?";
var answers6 = ['Boston', 'Springfield', 'Little Rock', 'New York'];
var answerButtons6 = document.getElementsByClassName('quizButton6');
var correct6 = 0 ;

for(var spot=0; spot<answers6.length; spot++)
{
    answerButtons6[spot].innerHTML = answers6[spot];

    answerButtons6[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers6[correct6]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question6").innerHTML = question6;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons6.length; num++) {
        answerButtons6[num].setAttribute('disabled',true);
    }
}

//Question 7
var question7 = "7. What is the name of the programming language John created?";
var answers7 = ['HTML', 'JAVA', 'STOP', 'LISP'];
var answerButtons7 = document.getElementsByClassName('quizButton7');
var correct7 = 3 ;

for(var spot=0; spot<answers7.length; spot++)
{
    answerButtons7[spot].innerHTML = answers7[spot];

    answerButtons7[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers7[correct7]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question7").innerHTML = question7;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons7.length; num++) {
        answerButtons7[num].setAttribute('disabled',true);
    }
}

//Question 8
var question8 = "8. In what year did John recieve the Ben Franklin Medal?";
var answers8 = ['2003', '1997', '1978', '2012'];
var answerButtons8 = document.getElementsByClassName('quizButton8');
var correct8 = 0 ;

for(var spot=0; spot<answers8.length; spot++)
{
    answerButtons8[spot].innerHTML = answers8[spot];

    answerButtons8[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers8[correct8]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question8").innerHTML = question8;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons8.length; num++) {
        answerButtons8[num].setAttribute('disabled',true);
    }
}

//Question 9
var question9 = "9. What class did John fail in College?";
var answers9 = ['Visual Art', 'PE', 'Topography', 'Quantum Physics'];
var answerButtons9 = document.getElementsByClassName('quizButton9');
var correct9 = 1 ;

for(var spot=0; spot<answers9.length; spot++)
{
    answerButtons9[spot].innerHTML = answers9[spot];

    answerButtons9[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers9[correct9]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question9").innerHTML = question9;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons9.length; num++) {
        answerButtons9[num].setAttribute('disabled',true);
    }
}

//Question 10
var question10 = "10. How would you rate this Quiz?";
var answers10 = ['Awful', 'Ok', 'Good', 'Amazing'];
var answerButtons10 = document.getElementsByClassName('quizButton10');
var correct10 = 3 ;

for(var spot=0; spot<answers10.length; spot++)
{
    answerButtons10[spot].innerHTML = answers10[spot];

    answerButtons10[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers10[correct10]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

document.getElementById("question10").innerHTML = question10;

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:purple;')
}
function disableAll() {
    for(var num=0; num<answerButtons10.length; num++) {
        answerButtons10[num].setAttribute('disabled',true);
    }
}