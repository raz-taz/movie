const theDiv = document.getElementById("movies")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '765e06c17amsh9799a23fdb2081fp1f670djsn11c75ae03817',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

var search = "";

getQueryVariable("search")

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
        search = pair[1]
      return pair[1];
    }
  } 
}



fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + search, options)
    .then(response => response.json())
    .then(data => {
        const list = data.d

        list.map((item) => {
            console.log(item)
            const d = document.createElement("div")
            const title = document.createElement("h1")
            const year = document.createElement("h3")
            const img = document.createElement("img")
            if (item.y == undefined){
                year.innerHTML = item.s
            }else{
                year.innerHTML = "Year: " + item.y
            }
            title.innerHTML = "Name: " + item.l
            img.src = item.i.imageUrl
            img.height = item.i.height / 3
            img.width = item.i.width / 3
            d.appendChild(title)
            d.appendChild(year)
            d.appendChild(img)
            theDiv.appendChild(d)
            theDiv.appendChild(document.createElement("br"))
        })
    })
    .catch(err => console.error(err));


document.getElementById("enter").addEventListener("click", function () {
    window.location = "?search=" + document.getElementById("search").value
})


window.onscroll = function () { scrollFunction() };
var mybutton = document.getElementById("top");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}