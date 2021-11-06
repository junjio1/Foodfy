
const cards = document.querySelectorAll('.card_admin > div > span');

for (let i = 0; i< cards.length; i++ ){

    cards[i].addEventListener("click", function(){
        window.location.href = `recipes/${i}`
    })
}

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
      
      // Delete last step ingredient

      function excludeIngredient(){
        const fieldContainer = document.querySelectorAll(".ingredient");
        const deletedField = fieldContainer[fieldContainer.length - 1]
        deletedField.parentNode.removeChild(deletedField)

        
      }

      document.querySelector(".exclude-ingredient").addEventListener("click", excludeIngredient);

      
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
   

      // exclude prep

            function excludePrep(){
        const fieldContainer = document.querySelectorAll(".preparation");
        const deletedField = fieldContainer[fieldContainer.length - 1]
        deletedField.parentNode.removeChild(deletedField)

        
      }

      document.querySelector(".exclude-preparation").addEventListener("click", excludePrep);