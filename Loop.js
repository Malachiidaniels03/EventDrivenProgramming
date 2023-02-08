let selfDestructActivated = false;
let launchActivated = false;
let stopped = false;
const LAUNCHCODE = localStorage.getItem("LAUNCHCODE");

function countDown(code) {
    code = LAUNCHCODE ;
 let answer = prompt("Enter Launch Code");
 if (answer === LAUNCHCODE) {
  alert("Access Granted Counting down to Blastoff!");
  countBlastoff() }
 else if (answer != code) {
  alert("ACCESS DENIED");
  countSelfDistruct()}}
 //This is the same function changes that I implemented in the last assignment to require an initiation code befor counting down. I cleaned it up a little.
 
 
 
 function countBlastoff() {
    launchActivated = true;
    stopped = false;
    for (let z = 10; z >= 0; z--) {        //I used a for loop to set the timer to 10 and count down by 1 untill z is >= 0
    timerId = setTimeout(function () {                 //I used the setTimeour function similar to the last assignment to make the counter count down over a 1s delay
         document.getElementById("countdownTimer").style.color = 'rgb(13,255,160)'
         if (stopped) {
            clearTimeout(timerId);
            document.getElementById("countdownTimer").innerHTML = '';
            return;
          }
        if (z === 0) {                        //I used to say if z is = 0 say Blastoff!
         document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!!!!";  //I used documentgetElementById to display blastoff on the screen
         document.getElementById("halfway").innerHTML = "";
         addData("AAA");
         setTimeout(function(){document.getElementById("countdownTimer").innerHTML = "";}, 2000);
        } 
        else {                                                          //I used an else statment to ensure when the counter wasnt showing "blastoff" it will show the count
         document.getElementById("countdownTimer").innerHTML = z; //I used document.getElement again along with else to acomplish what i said ubove
      }
      if (z <= 5 && z >= 1) {
        document.getElementById("halfway").style.color = 'rgb(13,255,160)'
        document.getElementById("halfway").innerHTML = "HALF WAY TO BLASTOFF EXCELLENT";
    } 
    else if ( z < 1) {
        document.getElementById("halfway").innerHTML = "";
    }//)
    }, (10 - z) * 1000);  //I subtracted 10-z to find how far z is from 0 then multiplied by 1000 to convert to millisecods to help acomplish adding a delay before each num by 1 second. ( i had a little help from the internet on this part LOL)
 }
 }
 function countSelfDistruct() {
    selfDestructActivated = true;
    stopped = false;
  alert("Counting Down To SELF DISTRUCT!");
  for (let z = 10; z >= 0; z--) {        //I used a for loop to set the timer to 10 and count down by 1 untill z is >= 0
    timerId = setTimeout(function () {                 //I used the setTimeour function similar to the last assignment to make the counter count down over a 1s delay
        document.getElementById("countdownTimer").style.color = "rgb(255,0,0)";
        if (stopped) {
            clearTimeout(timerId);
            document.getElementById("countdownTimer").innerHTML = '';
            return; 
          }
        if (z === 0){                        //I used to say if z is = 0 say SELFDISTRUCT!!!!
           document.getElementById("countdownTimer").innerHTML = "SELF DISTRUCTING!!!!!!";  //I used documentgetElementById to display SELFDISTRUCT!!!! on the screen
           document.getElementById("countdownTimer").style.color = "rgb(255,0,0)";
           document.getElementById("halfway").innerHTML = "";
           addData("BBB");
           setTimeout(function(){document.getElementById("countdownTimer").innerHTML = "";}, 2000);
        } 
        else {                                                          //I used an else statment to ensure when the counter wasnt showing "SELFDISTRUCT!!!!" it will show the count
           document.getElementById("countdownTimer").innerHTML = z; //I used document.getElement again along with else to acomplish what i said ubove
        }
        if (z <= 5 && z >= 1) {
            document.getElementById("halfway").style.color = "rgb(255,0,0)";
            document.getElementById("halfway").innerHTML = "HALF WAY THERE BETTER ABORT BEFORE ITS TOO LATE!";
        } 
        else if ( z < 1) {
            document.getElementById("halfway").innerHTML = "";
        }//)
      }, (10 - z) * 1000);  //I subtracted 10-z to find how far z is from 0 then multiplied by 1000 to convert to millisecods to help acomplish adding a delay before each num by 1 second. ( i had a little help from the internet on this part LOL)
  }
  }

  function Abort() { 
    if (selfDestructActivated || document.getElementById("countdownTimer").innerHTML === "SELF DISTRUCTING!!!!!!") {
        let answer = prompt("Enter Code To Abort Self Distruct!")
        if (answer === '0000') {
            alert ("Mission Abort Successful");
            stopped = true;
            addData("CCC");
        }
        else {
            alert ("Mission Abort Failed SELF DISTRUCTING NOW!")
            return;
        }
    }
    if (launchActivated || document.getElementById("countdownTimer").innerHTML === "BLASTOFF!!!!!!") {
        let answer = prompt("Are you sure you want to abort Launch (Y/N)?") 
        if (answer === "Y") {
            alert ("Mission Abort Successful")
            stopped = true;
            addData("CCC");
        }
        else if (answer === "N") {
            alert ("Mission Abort Cancelled Proceeding to BLASTOFF!!!!!!")
        }
        else if (answer != "Y" || "N") {
            alert ("Invalid Response Proceding to BLASTOFF!!!!!!")
        }
    }
    else if (launchActivated == false && selfDestructActivated == false) { alert("No need to abort. No Launch in progress")
    }
}

function LogIn() {
    location.replace("Login.html")
}

function SignOut() {
    let answer = prompt("Are you sure you want to sign out? All launch data will be lost (Y/N)?") 
        if (answer === "Y") {
            alert ("Signing out")
            location.replace("index.html")
        }
        else if (answer === "N") {
            console.log ("signout cancelled")
        }
        else if (answer != "Y" || "N") {
            alert ("Invalid Response")
            SignOut();
        }  
}

function SwitchUser() {
    let answer = prompt("Are you sure you want to switch user? All launch data will be lost (Y/N)?") 
    if (answer === "Y") {
        alert ("Signing out")
        location.replace("HomePageLogedIn.html")
        location.replace("Login.html")
    }
    else if (answer === "N") {
        console.log ("switch user cancelled")
    }
    else if (answer != "Y" || "N") {
        alert ("Invalid Response")
        SwitchUser();
    }  
}
window.onload = function() {
    localStorage.setItem("count", 0);
  }
  function addData(key) {
      let user = localStorage.getItem("USER");
      let table = document.getElementById("launchTable");
      let newRow = table.insertRow(-1);
      let cell1 = newRow.insertCell(0);
      let cell2 = newRow.insertCell(1);
      let cell3 = newRow.insertCell(2);
      let cell4 = newRow.insertCell(3);
      let cell5 = newRow.insertCell(4);
      cell1.innerHTML = user;
      cell2.innerHTML = LaunchNumber();
      if (key == "AAA") {
        cell3.innerHTML = Yes();
        cell4.innerHTML = No();
        cell5.innerHTML = No();
      } else if (key == "BBB") {
        cell3.innerHTML = No();
        cell4.innerHTML = No();
        cell5.innerHTML = Yes();
      } else if (key == "CCC") {
        cell3.innerHTML = No();
        cell4.innerHTML = Yes();
        cell5.innerHTML = No();
      } 
    }
    function LaunchNumber() {
      let currentCount = localStorage.getItem("count");
      currentCount++;
      localStorage.setItem("count", currentCount);
      if (currentCount >= 5) {
        alert("Maximum Number of Launches Reached Please Collect Data and Sign Out Or Switch User");
        document.getElementById("launch").disabled= true;
        document.getElementById("launch").style.color="rgb(255,0,0,.3)";
        document.getElementById("launch").style.backgroundColor="rgb(255,0,0,.1)";
        document.getElementById("abort").disabled= true;
        document.getElementById("abort").style.color="rgb(255,0,0,.3)";
        document.getElementById("abort").style.backgroundColor="rgb(255,0,0,.1)";
        document.getElementById("countdownTimer").innerHTML = "";
      }
      else return currentCount;
    }
    
    function Yes () {
      let Y = "Y";
      return Y;
    }
    
    function No () {
      let N = "N";
      return N;
    }
  