const newsBtn = document.getElementById("newsBtn")
const sourcesbtn = document.getElementById("sourcesbtn")
const displayNews = document.getElementById("displayNews")
let newsContainer = news.articles

newsBtn.addEventListener("click", function(){
    newsContainer.map((newsContainer)=>{

    
        let item =` 
    <div>
            <b>${newsContainer.author}</b>
            <p>${newsContainer.title}</p>
            <p> ${newsContainer.description}>
            <p>${newsContainer.url}</p>
            <p><img src="${newsContainer.urlToImage}"/></p>
    </div>
    `            
            displayNews.insertAdjacentHTML("beforeend", item)
})
        })
