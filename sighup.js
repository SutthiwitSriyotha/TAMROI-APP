var google_btn = document.getElementById("google");
var text_gg = document.getElementById("span-gg");
console.log(text_gg)
console.log(google_btn)


function onmouseGG(){
    google_btn.style.backgroundColor = 'white';
    text_gg.style.color = 'black';
}

function onmouseleaveGG(){
    google_btn.style.backgroundColor = '#b6b8b9';
    text_gg.style.color = 'white';
}

function createdata(){
    var data = {}
    var emailvalue = document.getElementById("email").value;
    var passwordvalue = document.getElementById("password").value;
    var usernamevalue = document.getElementById("username").value;
    var username_box = document.getElementById("username");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var email_box = document.getElementById("email")
    var password_box = document.getElementById("password")
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var usernamePattern = /^(?=.*[a-zA-Z]).{6,}$/

    if(emailPattern.test(emailvalue) && passwordPattern.test(passwordvalue) && usernamePattern.test(usernamevalue)){
        data.Email = emailvalue;
        data.Username = usernamevalue;
        data.Password = passwordvalue;
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data)
        window.location.href = "Login.html"
    }else{
        email_box.style.border = "1px solid red";
        
        
        email_box.style.animation = 'shake 0.5s ease';
        
        
        email_box.addEventListener('animationend', function() {
            email_box.style.animation = '';
        });
        password_box.style.border = "1px solid red";
        password_box.style.animation = 'shake 0.5s ease';
        
        password_box.addEventListener('animationend', function() {
            password_box.style.animation = '';
        });
        username_box.style.border = "1px solid red";
        username_box.style.animation = 'shake 0.5s ease';
        
        username_box.addEventListener('animationend', function() {
            username_box.style.animation = '';
        });
    }
    
}

document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/?locale=th_TH', '_blank');
});

document.getElementById('google').addEventListener('click', function() {
    window.open('https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&dsh=-3059123689118422685', '_blank');
});

{
    let password = document.getElementById("password");
let openeye = document.getElementById("openeye");
let closeeye = document.getElementById("closeeye");

password.addEventListener('input', function () {
    if (password.value !== "") {
        openeye.style.display = "block";
    } else {
        openeye.style.display = "none";
        closeeye.style.display = "none";
        password.type = "password"
    }
});

openeye.addEventListener('click', function () {
    if (password.type === "password") {
        password.type = "text";
        openeye.style.display = "none";
        closeeye.style.display = "block";
    } else {
        password.type = "password";
        openeye.style.display = "none";
        closeeye.style.display = "block";
    }
});

closeeye.addEventListener('click', function () {
    if (password.type === "password") {
        password.type = "text";
        openeye.style.display = "none";
        closeeye.style.display = "block";
    } else {
        password.type = "password";
        openeye.style.display = "block";
        closeeye.style.display = "none";
    }
});


}