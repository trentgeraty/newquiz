console.log("Hello")

const username = document.getElementById('intials');
const saveScorebtn = document.getElementById('saveScorebtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(JSON.parse(localStorage.getItem("highScores")));
finalScore.innerText = mostRecentScore;
username.addEventListener('keyup',() => {
    console.log(username.value);
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: intials.value
    };
    highScores.push(score);
    console.log(highScores);

 localStorage.setItem("highScores", JSON.stringify(highScores));
 window.location.assign("highscores.html");

}; 


