score=0;
function updatescore(){
    score=score+1;
    document.getElementById("score").innerHTML = "Score: " + score;
}
function savescore{
    localStorage.setItem("score",score);
} 
function nextPage() { window.location = "https://www.youtube.com/watch?v=v1MEMf9nyeQ"; }