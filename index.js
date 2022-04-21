let buttonLike = document.querySelector('.like');
let buttonDislike = document.querySelector('.dislike');
let image= document.querySelector('.likeimage');
let fighters = document.querySelector('.imgngannouferguson')
let icone = document.getElementById('heart1')


let numberOflikes =0;
let numberOfdislikes=0;


buttonLike.addEventListener('click',()=>{
    numberOflikes+=1;
    console.log(numberOflikes)
    document.getElementById('myLikes').innerHTML = numberOflikes
})

buttonDislike.addEventListener('click',()=>{
    numberOfdislikes+=1;
    document.getElementById('myDislikes').innerHTML = numberOfdislikes
    
})

fighters.addEventListener('dblclick',()=>{
    numberOflikes+=1;
    document.getElementById('myLikes').innerHTML = numberOflikes
     icone.classList.remove('hidden')
     icone.classList.remove('animate__animated')
     icone.classList.remove('animate__fadeIn')
     icone.classList.remove('animate__delay-0.5s')
    setTimeout(()=>{
        icone.classList.add('hidden')
        icone.classList.remove('animate__animated')
        icone.classList.remove('animate__fadeIn')
        icone.classList.remove('animate__delay-0.5s')
    },500)

})
