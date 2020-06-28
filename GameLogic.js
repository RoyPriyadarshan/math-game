//javascript.js
var playing  = false;
var score;
//if we click on the start/reset
document.getElementById("start").onclick = function () {
    //if we are playing
    if (playing == true){
        location.reload(); //reloads the page for game
    }else{
         //if we are not playing
            //set score to zero
        score = 0;
        document.getElementById("score value").innerHTML= score;
        document.getElementById("timeremaining").style.display= "block";
        
    }
    
}
    //if we are playing
            //reload page
    //if we are not playing
        //set score to zero
        //show countdown box
        //reduce the time by 1sec in loops
            //time left
                //yes -->continue
                //no --->gameover
        //change button to reset
        //generate new Q&A


//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase the score        
                //show correct box for 1sec
            //no
                //show try again box for 1sec