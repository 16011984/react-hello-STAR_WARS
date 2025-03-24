var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.timeRunning')


let timeRunning = 3000
let timeAutoNext = 7000


nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

function showSlider(type){

    if(type === 'next'){
        list.appendChild(item[0])
        carousel.classlist.add('next')
    }
    else {
        list.prepend(item.length - 1) 
        carousel.classlist.add('prev')
    }

}






