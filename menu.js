function openwindow(Link){
    window.open(Link, '_self');
}


{
    let button = document.getElementById("user");
    let control = document.getElementById("control-box");

    button.addEventListener('click',function(){
        let displayValue = window.getComputedStyle(control).getPropertyValue('display');
  
        if (displayValue === 'none' || displayValue === '') {
            control.style.display = 'block';
        } else {
            control.style.display = 'none';
        }
    })
}

function showfilters() {
    var filtersBox = document.querySelector('.filters-box');
    var displayValue = window.getComputedStyle(filtersBox).getPropertyValue('display');
  
    if (displayValue === 'none' || displayValue === '') {
      filtersBox.style.display = 'block';
    } else {
      filtersBox.style.display = 'none';
    }
}


{
    let click_heart = document.getElementById('heart_full');
    let total = document.getElementById('total_heart');
    let start = 0;
    
    click_heart.addEventListener('click', function () {
        if (click_heart.style.color === 'rgb(236, 130, 148)') {
            click_heart.style.color = 'black';
            start = start-1;
        } else {
            click_heart.style.color = 'rgb(236, 130, 148)';
            start = start+1;
        }
        total.innerText = start;
    });
}

{
    let username_text = document.getElementById('username');
    let comment_box = document.getElementById('comment');
    let cancel_button = document.getElementById('cancel');
    let submit_button = document.getElementById('submit');
    let submit = document.getElementById('submit');
    let storedUserData = localStorage.getItem('data');
    
    let data = JSON.parse(storedUserData);
    comment_box.addEventListener('focus',function(){
        username_text.style.display = "block";
        cancel_button.style.display = "block";
        submit_button.style.display = "block";
        submit.style.cursor = "not-allowed"
        username_text.innerText = "@"+data.Username;
    })
    comment_box.addEventListener('input', function () {
        if (comment_box.value !== null && comment_box.value !== "") {
            submit.style.backgroundColor = "#0556BF";
            submit.style.color = "white"
            submit.style.cursor = "pointer"
        } else {
            submit.style.backgroundColor = "#d3d3d3";
            submit.style.color = "#2f373886"
            submit.style.cursor = "not-allowed"
        }
    });
    
    cancel_button.addEventListener('click',function(){
        username_text.style.display = "none";
        cancel_button.style.display = "none";
        submit_button.style.display = "none";
        submit.style.backgroundColor = "#d3d3d3";
        submit.style.color = "#2f373886"
        comment_box.value = ""
    })


    
    submit.addEventListener('click', function() {

        var newComment = document.createElement('div');
        newComment.setAttribute('class', 'comment-user');
    
        let storedUserImage = localStorage.getItem('imageData');
        var accDiv = document.createElement('div');
        accDiv.setAttribute('class', 'acc2');
        var accIcon = document.createElement('img');
        accIcon.setAttribute('src', storedUserImage);
        accIcon.setAttribute('class', 'pofile');
        accDiv.appendChild(accIcon);
    

        var userinputBox = document.createElement('div');
        userinputBox.setAttribute('class', 'userinput-box');
        var usernameP = document.createElement('p');
        usernameP.setAttribute('class', 'user');
        usernameP.innerText = '@' + data.Username;
        var commentP = document.createElement('p');
        commentP.setAttribute('class', 'usercomment');
        commentP.innerText = comment_box.value;
    

        userinputBox.appendChild(usernameP);
        userinputBox.appendChild(commentP);
        newComment.appendChild(accDiv);
        newComment.appendChild(userinputBox);
   
        var allCommentContainer = document.getElementsByClassName('all-comment-user')[0];
        allCommentContainer.appendChild(newComment);
    

        comment_box.value = "";

        username_text.style.display = "none";
        cancel_button.style.display = "none";
        submit_button.style.display = "none";
        submit.style.backgroundColor = "#d3d3d3";
        submit.style.color = "#2f373886";

    });
    
    
    
}

{
    function getimage(){
        let storedUserImage = localStorage.getItem('imageData');
        let profile = document.getElementById('pofile');
        profile.setAttribute('src',storedUserImage)
    }
}
{
    let lisa_comment = document.getElementsByClassName('usercomment');
    lisa_comment[0].innerText = "เมนูน่าสนใจมากค่ะ"
}

{
    let allcomment = 1
    let comment_number = document.getElementById('comment_number');
    let submit = document.getElementById('submit');

    submit.addEventListener('click',function(){
        allcomment = allcomment+1
        comment_number.innerText = allcomment
    })

}