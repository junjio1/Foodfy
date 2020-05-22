// const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');


for (let i = 0; i< cards.length; i++ ){

// for (let card of cards){
    // const image_id = card.getAttribute("id")
    console.log(cards[i])
    cards[i].addEventListener("click", function(){
        // modalOverlay.classList.add('active')
        // modalOverlay.querySelector("img").src=`assets/${image_id}`
        // modalOverlay.querySelector("h2").innerHTML = card.querySelector("h2").innerHTML
        // modalOverlay.querySelector("p").innerHTML = card.querySelector("p").innerHTML
        window.location.href = `/receitas/${i}`
    })
}

// document.querySelector('.modal_close').addEventListener("click", function(){
//     modalOverlay.classList.remove('active')
// })


// hiden and show button

const hideShow = document.querySelectorAll('.btn-show');
const recipeInfo = document.querySelectorAll('.recipe-info')


    

 for (let i = 0 ; i < hideShow.length; i++){
    hideShow[i].addEventListener("click", function() {

        if(recipeInfo[i].classList.contains('hide')){
            recipeInfo[i].classList.remove('hide')
            hideShow[i].innerHTML = "Esconder"
        }else {
            recipeInfo[i].classList.add('hide')
            hideShow[i].innerHTML = "Mostrar"
        }
        
    })} 