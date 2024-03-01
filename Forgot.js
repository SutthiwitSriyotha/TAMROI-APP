var box_otp = document.getElementById("Box-otp");
var randomNumber = null;
box_otp.addEventListener('click',function(){
    randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    console.log(randomNumber);

    box_otp.style.backgroundColor = "gray"
})

function resetpassword(){
    
    var newpass = document.getElementById("Newpassword").value;
    var conpass = document.getElementById("Conpassword").value;
    var emailvalue = document.getElementById("email").value;
    var otpvalue = document.getElementById("otp").value;
    
    var box_newpass = document.getElementById("Newpassword");
    var box_conpass = document.getElementById("Conpassword");
    var box_email = document.getElementById("email");
    var box_otp = document.getElementById("otp");
   
    var storedUserData = localStorage.getItem('data');
    var data = JSON.parse(storedUserData);

    if (otpvalue === randomNumber) {
        window.location.href = "Login.html"
        data.Password = newpass
        localStorage.setItem('data', JSON.stringify(data));
      } if(conpass === "") {
        
        box_conpass.style.border = "1px solid red";
      
        box_conpass.style.animation = 'shake 0.5s ease';

        box_conpass.addEventListener('animationend', function() {
          box_conpass.style.animation = '';
        });
    
      }if(newpass === ""){
        box_newpass.style.border = "1px solid red";
      
        box_newpass.style.animation = 'shake 0.5s ease';

        box_newpass.addEventListener('animationend', function() {
            box_newpass.style.animation = '';
        });
      }if(emailvalue === ""){
        box_email.style.border = "1px solid red";
      
        box_email.style.animation = 'shake 0.5s ease';

        box_email.addEventListener('animationend', function() {
            box_email.style.animation = '';
        });
      }if(otpvalue === ""){
        box_otp.style.border = "1px solid red";
      
        box_otp.style.animation = 'shake 0.5s ease';

        box_otp.addEventListener('animationend', function() {
            box_otp.style.animation = '';
        });
      }
    
}

{
  {
  let newpassword = document.getElementById("Newpassword");
  let conpassword = document.getElementById("Conpassword");
  let openeye = document.getElementById("openeye");
  let closeeye = document.getElementById("closeeye");
  let openeye2 = document.getElementById("openeye2");
  let closeeye2 = document.getElementById("closeeye2");

  newpassword.addEventListener('input', function () {
    if (newpassword.value !== "") {
      openeye.style.display = "block";
    } else {
      openeye.style.display = "none";
      closeeye.style.display = "none";
      newpassword.type = "password";
    }
  });

  conpassword.addEventListener('input', function () {
    if (conpassword.value !== "") {
      openeye2.style.display = "block";
    } else {
      openeye2.style.display = "none";
      closeeye2.style.display = "none";
      conpassword.type = "password";
    }
  });

  openeye.addEventListener('click', function () {
    if (newpassword.type === "password") {
      newpassword.type = "text";
      openeye.style.display = "none";
      closeeye.style.display = "block";
    } else {
      newpassword.type = "password";
      openeye.style.display = "none";
      closeeye.style.display = "block";
    }
  });

  closeeye.addEventListener('click', function () {
    if (newpassword.type === "password") {
      newpassword.type = "text";
      openeye.style.display = "none";
      closeeye.style.display = "block";
    } else {
      newpassword.type = "password";
      openeye.style.display = "block";
      closeeye.style.display = "none";
    }
  });

  openeye2.addEventListener('click', function () {
    if (conpassword.type === "password") {
      conpassword.type = "text";
      openeye2.style.display = "none";
      closeeye2.style.display = "block";
    } else {
      conpassword.type = "password";
      openeye2.style.display = "none";
      closeeye2.style.display = "block";
    }
  });

  closeeye2.addEventListener('click', function () {
    if (conpassword.type === "password") {
      conpassword.type = "text";
      openeye2.style.display = "none";
      closeeye2.style.display = "block";
    } else {
      conpassword.type = "password";
      openeye2.style.display = "block";
      closeeye2.style.display = "none";
    }
  });
}


}