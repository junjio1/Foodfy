
// CARDS RECIPES

const cards = document.querySelectorAll('.card')

for (let i = 0; i< cards.length; i++ ){
    let recipeId = cards[i].lastElementChild.value
    cards[i].addEventListener("click", function(){
        window.location.href = `/recipes/${recipeId}`
    })
}


// ADD AND SHOW

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

    // HIDE SEARCH BOX FROM CHEFS PAGE

const currentPage = location.pathname
const searchBox = document.querySelector(".search")

if (currentPage == "/Chefs"){
    searchBox.style.display = "none"
}
