window.onload=function(){
    var form=document.querySelector("#submit")
    form.addEventListener("click",handleSubmit)
}
function handleSubmit(){
    event.preventDefault()
    var movieName=document.querySelector(".form-control").value
    //console.log(movieName)
    showMovieDetails(movieName)
}
function showMovieDetails(movieName){
    var xhr=new XMLHttpRequest()
    var url="http://www.omdbapi.com/?apikey=a80cc53f&s="+movieName
    xhr.open("GET",url)
    xhr.send()
    xhr.onload=function(){
        var data=JSON.parse(xhr.response)
        //console.log(data)
        renderCards(data)  
    }
}
function showError(){
    console.log("Movie not found")
}
function renderCards(data){
    //console.log(data)
    var res=document.querySelector(".result")
    res.innerHTML=""
    var div=document.createElement("div")
    var length=data.Search.length
    for(var i=0;i<length;i++){
        var cardContainer=createCard(data.Search[i])
        div.append(cardContainer)
    }
    res.append(div)
}

function createCard(item){
    var card=document.createElement("div")
    card.style.width="40rem"
    card.setAttribute("class","card mb-5 p-4")

    var img=document.createElement("img")
    img.setAttribute("class","img-fluid")
    img.setAttribute("src",item.Poster)
    img.setAttribute("alt",item.Title)

    var cardBody=document.createElement("div")
    cardBody.setAttribute("class","card-body")

    var title=document.createElement("h3")
    title.style.color="green"
    title.textContent=item.Title+";"+item.Year

    var cardFooter=document.createElement("div")
    cardFooter.setAttribute("class","card-footer")
    var cardLink=document.createElement("a")
    cardLink.setAttribute("class","card-link")
    cardLink.setAttribute("href","https://www.imdb.com/title/"+item.imdbID)
    cardLink.textContent="IMDB link"

    cardBody.append(title)
    cardFooter.append(cardLink)

    card.append(img,cardBody,cardFooter)

    return card
}