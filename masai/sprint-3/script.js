var res = document.querySelectorAll(".res")
var ind = document.querySelectorAll(".ind")
var para = document.getElementById("para")
var date = new Date()
para.innerHTML = date
//console.log(res[0].innerHTML)
var btn = document.querySelector("button")
btn.addEventListener("click", myFunction)
function myFunction() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.covid19api.com/summary')
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            var obj = JSON.parse(xhr.response)
            //console.log(obj.Global.NewConfirmed)
            res[0].innerHTML = obj.Global.NewConfirmed
            res[1].innerHTML = obj.Global.TotalConfirmed
            res[2].innerHTML = obj.Global.NewDeaths
            res[3].innerHTML = obj.Global.TotalDeaths
            res[4].innerHTML = obj.Global.NewRecovered
            res[5].innerHTML = obj.Global.TotalRecovered

            ind[0].innerHTML = obj.Countries[76].NewConfirmed
            ind[1].innerHTML = obj.Countries[76].TotalConfirmed
            ind[2].innerHTML = obj.Countries[76].NewDeaths
            ind[3].innerHTML = obj.Countries[76].TotalDeaths
            ind[4].innerHTML = obj.Countries[76].NewRecovered
            ind[5].innerHTML = obj.Countries[76].TotalRecovered

        }
        else {
            console.log("Error code is:" + xhr.status)
        }
    }
}