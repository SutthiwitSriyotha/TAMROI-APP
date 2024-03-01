function openwindow(link) {
    window.open(link, '_self');
}

var profile_button = document.getElementById('profile_button');
var password_button = document.getElementById('password_button');
var favorite_button = document.getElementById('favorite_button');
var detail1Elements = document.getElementById('detail_setting');
var detail2Elements = document.getElementById('detial_setting2'); 
var detail3Elements = document.getElementById('detial_setting3');
var main_text = document.getElementById('main_text');
var main_text2 = document.getElementById('main_text2');
var main_text3 = document.getElementById('main_text3');
profile_button.addEventListener('click', function() {
    profile_button.style.color = "black";
    password_button.style.color = "#6A6A6A";
    favorite_button.style.color = "#6A6A6A";
    profile_button.style.backgroundColor = "#EDF0F2";
    password_button.style.backgroundColor = "#FAFAFA";
    favorite_button.style.backgroundColor = "#FAFAFA";
    detail1Elements.style.display = "block";
    detail2Elements.style.display = "none";
    detail3Elements.style.display = "none";
    main_text.innerText = "Profile"
});

password_button.addEventListener('click', function() {
    profile_button.style.color = "#6A6A6A";
    password_button.style.color = "black";
    favorite_button.style.color = "#6A6A6A";
    password_button.style.backgroundColor = "#EDF0F2";
    profile_button.style.backgroundColor = "#FAFAFA";
    favorite_button.style.backgroundColor = "#FAFAFA";
    detail1Elements.style.display = "none";
    detail2Elements.style.display = "block";
    detail3Elements.style.display = "none";
    main_text2.innerText = "Password"
});

favorite_button.addEventListener('click', function() {
    profile_button.style.color = "#6A6A6A";
    favorite_button.style.color = "black";
    password_button.style.color = "#6A6A6A";
    favorite_button.style.backgroundColor = "#EDF0F2";
    password_button.style.backgroundColor = "#FAFAFA";
    profile_button.style.backgroundColor = "#FAFAFA";
    detail1Elements.style.display = "none";
    detail2Elements.style.display = "none";
    detail3Elements.style.display = "block";
    main_text3.innerText = "Favorites"
});











var storedUserData = localStorage.getItem('data');
var data = JSON.parse(storedUserData);

let username_data = document.getElementById('username_data');
let email_data = document.getElementById('email_data');
let userpassword_data = document.getElementById('userpassword_data');
username_data.value = data.Username
email_data.value = data.Email
userpassword_data.value = data.Password

let upload_button = document.getElementById('upload');
let file_input = document.getElementById('fileToUpload');
let logo = document.getElementById('logo');

upload_button.addEventListener('click', function() {
    file_input.click();
});

file_input.addEventListener('change', function() {
    if (file_input.files && file_input.files[0]) {
        let imageFile = file_input.files[0];
        if (imageFile.type.startsWith('image/')) {
            let reader = new FileReader();

            reader.onload = function(e) {

                let imageDataURL = e.target.result;


                localStorage.setItem('imageData', imageDataURL);

                logo.setAttribute('src', imageDataURL);
            };

            reader.readAsDataURL(imageFile);
        } else {
            alert('กรุณาเลือกไฟล์รูปภาพเท่านั้น');

            file_input.value = '';
        }
    }
});

let storedImage = localStorage.getItem('imageData');
if (storedImage) {

    logo.setAttribute('src', storedImage);
}