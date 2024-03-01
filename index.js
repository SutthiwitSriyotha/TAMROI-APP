function showfilters() {
    var filtersBox = document.querySelector('.filters-box');
    var displayValue = window.getComputedStyle(filtersBox).getPropertyValue('display');
  
    if (displayValue === 'none' || displayValue === '') {
      filtersBox.style.display = 'block';
    } else {
      filtersBox.style.display = 'none';
    }
}

let slideIndex = 1;
showSlides(slideIndex);

setInterval(function() {
    plusSlides(1);
}, 5500);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    
    if (n > slides.length) { 
        slideIndex = 1;
    } 

    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

function showcontent1(content1, content2) {
    let contentdisplay = document.getElementsByClassName(content1);
    let Text_color = document.getElementById("main-text-content1");


    for (let i = 0; i < contentdisplay.length; i++) {
        contentdisplay[i].style.display = "block";
    }
    Text_color.style.color = "rgb(53, 53, 204)";
    let Text_color_none = document.getElementById("main-text-content2");
   

    let allContent2 = document.getElementsByClassName(content2);
    for (let i = 0; i < allContent2.length; i++) {
        allContent2[i].style.display = "none";
        Text_color_none.style.color = "black";
    }
}



function showcontent2(content1, content2) {
    let contentdisplay = document.getElementsByClassName(content2);
    let Text_color = document.getElementById("main-text-content2");


    for (let i = 0; i < contentdisplay.length;i++) {
        contentdisplay[i].style.display = "block";
    }

    Text_color.style.color = "rgb(53, 53, 204)";
    let Text_color_none = document.getElementById("main-text-content1");

    let allContent1 = document.getElementsByClassName(content1);
    for (let i = 0; i < allContent1.length; i++) {
        allContent1[i].style.display = "none";
        Text_color_none.style.color = "black";
    }
}

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



function showcontent(content) {
   
    let allContentBoxes = document.querySelectorAll('.content-box > div');
    allContentBoxes.forEach(function(box) {
        box.style.display = 'none';
    });
    
    let clickedContent = document.querySelector('.content-box .' + content);
    if (clickedContent) {
        clickedContent.style.display = 'block';
    }

    let allTexts = document.querySelectorAll('.content-text h4');
    allTexts.forEach(function(text) {
        text.style.color = "black";
    });

    let clickedText = document.getElementById("main-text-" + content);
    if (clickedText) {
        clickedText.style.color = "rgb(53, 53, 204)";
    }

    let allContents = document.querySelectorAll('.' + content);
    allContents.forEach(function(content) {
        content.style.display = 'block';
    });
}


{
    let content = document.getElementsByClassName('content');
    let content2 = document.getElementsByClassName('content2');
    let search = document.getElementById('search');
    let search_submit = document.getElementById('search_submit');
    search_submit.addEventListener('click',function(){
        if(search.value == "ข้าวมันไก่"){
            window.open('kawmunkai.html', '_self');
        }
    })
    search.addEventListener('input', function() {
        const keyword = this.value.trim().toLowerCase();
        
        
        const allContent = Array.from(content).concat(Array.from(content2));
    
        for (let i = 0; i < allContent.length; i++) {
            const contentKeywords = allContent[i].dataset.keyword.toLowerCase();
    
            if (contentKeywords.includes(keyword)) {
                allContent[i].style.display = "block";
            } else {
                allContent[i].style.display = "none";
            }
        }
    });
    
    
    
}