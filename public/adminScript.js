
const currentPage = location.pathname
const links = document.querySelectorAll(".links")

for (link of links){
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active")
    }
}

// Click card 
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


const PhotosUpload = {
    preview: document.querySelector('#photos-preview'),
    uploadLimit:6,
    handleFileInput(event) {
      const {files :filesList} = event.target
      
      if(PhotosUpload.hasLimit(event)) return

      Array.from(filesList).forEach(file => {
        const reader = new FileReader()
          
        reader.onload = () => {
          const image = new Image()
          image.src = String(reader.result)

          const div = PhotosUpload.getContainer(image)

          PhotosUpload.preview.appendChild(div)
        }
        
        reader.readAsDataURL(file)
      })
    },
    hasLimit(event){
      const { uploadLimit } = PhotosUpload
      const {files :filesList} = event.target
      

      if(filesList.length > uploadLimit){
        alert(`Evnie no maxio ${uploadLimit} imagens`)
        event.preventDefault()
        return true
      }

      return false
    },
    getContainer(image){
      const div = document.createElement('div')
      div.classList.add('photo')

      div.onclick = PhotosUpload.removePhoto

      div.appendChild(image)

      div.appendChild(PhotosUpload.getRemoveButton())

      return div
    },
    getRemoveButton(){
      const button = document.createElement('i')
      button.classList.add('material-icons')
      button.innerHTML = "close"
      return button
    },
    removePhoto(event){
      const photoDiv = event.target.parentNode
      const photosArray = Array.from(PhotosUpload.preview.children)
      const index = photosArray.indexOf(photoDiv)

      photoDiv.remove()
    }
}