
const cards = document.querySelectorAll('.card');

for (let i = 0; i< cards.length; i++ ){

    cards[i].addEventListener("click", function(){
        window.location.href = `/recipes/${i}`
    })
}



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
