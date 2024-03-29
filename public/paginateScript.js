// PAGINATION

function paginate(selectedPage, totalPages){

    let pages = [],
    oldPage

    for(let currentPage = 1 ; currentPage <= totalPages ; currentPage ++){

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage =  currentPage >= selectedPage - 2

        if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage ){
            if(oldPage && currentPage - oldPage > 2){
            pages.push("...") 
            }
            if(oldPage && currentPage - oldPage == 2){
                pages.push(currentPage - 1)
            }
            pages.push(currentPage)

            oldPage = currentPage
        }

    }
    return pages

}

const pagination = document.querySelector(".pagination")
const filter = pagination.dataset.filter
const page = +pagination.dataset.page
const total = +pagination.dataset.total
const pages = paginate(page, total)

let elemets = ""

for (let page of pages){
    if(String(page).includes("...")){
        elemets +=  `<span>${page}<span>`
    }else
        if(filter){
            elemets += `<a href="?page=${page}&filter=${filter}">${page}</a>`
    }else{
        elemets += `<a href="?page=${page}">${page}</a>`
    }
    
}

pagination.innerHTML = elemets