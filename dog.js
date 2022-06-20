let dog=[
    'image/dog.jpg','image/dog1.jpg',
    'image/dog2.jpg',
    'image/dog3.jpg',
    'image/dog4.jpg',
    'image/dog5.jpg',
    'image/dog6.jpg',
    'image/dog7.jpg',
    'image/dog8.jpg',
    'image/dog9.jpg',
    'image/dog10.jpg',
    'image/dog11.jpg',
    'image/dog12.jpg'
]
let colo=['green', 'yello','pink','purple','red','grey']
let button= document.getElementById("deen")
let imo =document.getElementById("fin")
let count=0
setInterval(solo,2000)
function solo(){
    imo.setAttribute("src",dog[count])
    if (count==11){
        count=0
    }
    count++
    let rand=colo[Math.floor(Math.random()*colo.length)]
    button.style.backgroundColor=rand
    
}
button.addEventListener("click",solo)