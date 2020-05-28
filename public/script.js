
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

    // Add Ingredients
    
    function addIngredient() {
        const ingredients = document.querySelector("#ingredients");
        const fieldContainer = document.querySelectorAll(".ingredient");
      
        // Realiza um clone do último ingrediente adicionado
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
        
        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.children[0].value == "") return false
      
        // Deixa o valor do input vazio
        newField.children[0].value = "";
        ingredients.appendChild(newField);
      }
      
      document.querySelector(".add-ingredient").addEventListener("click", addIngredient);
      
      
      
    //   Add preparation 
      
      function addPreparation() {
        const preparations = document.querySelector("#preparations");
        const fieldContainer = document.querySelectorAll(".preparation");
      
        // Realiza um clone do último ingrediente adicionado
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
        
        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.children[0].value == "") return false
      
        // Deixa o valor do input vazio
        newField.children[0].value = "";
        preparations.appendChild(newField);
      }
      
      document.querySelector(".add-preparation").addEventListener("click", addPreparation);