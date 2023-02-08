function checkCreds() {
    alert('Checking credentials...');
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var badgeNumber = document.getElementById('badgeNumber').value;
    var userName = firstName + ' ' + lastName + ' ' + badgeNumber;
    var dataName = firstName + ' ' + lastName + ' #'+ badgeNumber
    var LaunchCode = document.getElementById('launchCode').value
    if (userName.length > 20 || userName.length < 4) {
        document.getElementById('loginStatus').innerHTML = "Invalid credentials (Make sure you only use 15 characters total between your first and last name.)";
        alert("Invalid Name");
    }
    else if (badgeNumber > 999 || badgeNumber < 100) {
        document.getElementById('loginStatus').innerHTML = "Invalid credentials (Make sure badge number is no more than a 3 digits and has a value greater than 100)";
        alert("Invalid badge number");
    }
    else if (LaunchCode.length >5 || LaunchCode.length <5){
        document.getElementById('loginStatus').innerHTML = "Invalid Launch Code: Launch Code can be any 5 digit code however code must be 5 digits long."
    }
    else {
        localStorage.setItem('USER', dataName);
        localStorage.setItem('StudentName', firstName);
        localStorage.setItem('LAUNCHCODE', LaunchCode);
        location.replace("HomePageLogedIn.html");
    }
}
