// varibles
//let apiarray=["3b4613ef7b604936bbc82426671ddb95","b8155f2365844483ba6e79d41006c458"]
// navbar
const businessbtn = document.getElementById("business");
const sportsbtn = document.getElementById("sports");
const entertainmentbtn = document.getElementById("entertainment");
const technologybtn = document.getElementById("technology");
const loginbtn = document.querySelector(".fa-solid.fa-user");
const searchbtn = document.querySelector(".search-btn");
const closebtnicon = document.querySelector(".close-icon-btn");
const country = document.getElementById("countrySelect");
const categorypage = document.querySelector(".categorycards");
const frontpage = document.querySelector(".newsbar");
const headlinespage = document.querySelector(".maincards-1");
const headlinescards = document.querySelector(".subcards");
const trendingpage = document.querySelector(".maincards-2");
const newsbar = document.querySelector(".newsbar");
const trendingcards = document.querySelector(".subcards-2")
const headlines = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3b4613ef7b604936bbc82426671ddb95";
const trending = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3b4613ef7b604936bbc82426671ddb95"
const categorytitle = document.querySelector(".category-title");
const categorydisplay = document.querySelector('.categorycardsdsply');
const bookmarkbtn = document.querySelector(".bookmarks");
let countryNameKey = "in";

function urlUpdate(nation, category) {
    return `https://newsapi.org/v2/top-headlines?country=${nation}&category=${category}&apiKey=3b4613ef7b604936bbc82426671ddb95`
}

document.addEventListener('DOMContentLoaded', () => {
    // document.querySelector('.newsbar').style.display = "flex";
    headlinesfetch(headlines);
    trendingfetch(trending);
})


//data fetch
async function fetchnews(url) {
    try {
        const response = await fetch(url)
        const data = await response.json();
        newsarr = data.articles;
        // console.log(newsarr)
        return newsarr;

    } catch (error) {
        console.log(error);
    }
}

// fetchcategory
async function categoryfetch(url) {
    try {
        const news = await fetchnews(url);
        news.map((item) => {
            if (item.description != null) {
                categorydisplay.innerHTML +=
                    `
    <div class="categorycard">
    <i class="fa-sharp fa-solid fa-bookmark" style="color:dimgray;"></i>
    <a  href="${item.url}" target="_blank">
    <div class="categoryimg">
     <img src="${item.urlToImage}" alt="no-preview">
     </div>
     <div class="categorycontent">${item.description}</div>
     </a>
     </div>
     ` } else {
        categorydisplay.innerHTML +=
     ` <div class="categorycard2">
        <i class="fa-sharp fa-solid fa-bookmark" style="color:dimgray;"></i>
        <div class="categoryimg2">
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/09/breakingnews-live-blog-1568185450-1595123397-1600393902.jpg" alt="no-preview">
        </div>
        <div class="categorycontent2">
        <a  href="${item.url}" target="_blank"> Click Here</a>
        
        </div>
     </div>`
            }
        })
    } catch (error) {
        //  alert("details not available")    
    }
}

categoryfetch(urlUpdate)

country.addEventListener("click", (e) => {
    countryNameKey = e.target.value;
    // categoryfetch(searchurl)
})

businessbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Business</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})

sportsbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Sports</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})
technologybtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Technology</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);

})
entertainmentbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Entertainment</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})
loginbtn.addEventListener("click", (e) => {
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})

searchbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    let searchinput = document.querySelector(".search").value;

    let searchurl = `https://newsapi.org/v2/everything?q=${searchinput}&apiKey=3b4613ef7b604936bbc82426671ddb95`;
    console.log(searchinput)
    //  categorytitle.innerHTML="";
    categoryfetch(searchurl)


})
searchbtn.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        //   event.preventDefault();
        frontpage.style.display = "none";
        categorydisplay.innerHTML = ""
        categorypage.style.display = "flex"
        let searchinput = document.querySelector(".search").value;

        let searchurl = `https://newsapi.org/v2/everything?q=${searchinput}&apiKey=b8155f2365844483ba6e79d41006c458`;
        console.log(searchinput)
        // categorytitle.innerHTML="";
        categoryfetch(searchurl)
    }
});



async function headlinesfetch(headlines) {
    const headlinesnews = await fetchnews(headlines);
    headlinesnews.map((item, index) => {

        if (index == 0) {
            headlinespage.innerHTML =
    `<i class="fa-sharp fa-solid fa-bookmark" style="color:dimgray;"></i>
         <a  href="${item.url}" target="_blank">
        <img src="${item.urlToImage}" alt="">
        <div class="para-1">
        ${item.description}
        </div>
        </a>`
        }

        if (index != 0) {
            headlinescards.innerHTML +=
                `<div class="subcard">
            <i class="fa-sharp fa-solid fa-bookmark" style="color:dimgray;"></i>
                <a  href="${item.url}" target="_blank">
                <img src="${item.urlToImage}" alt=""></img>
                <div class="para">
                ${item.description};
                </div>
                </a>
                </div>`
        }
    })

}

function sortByPublishedAt(newsData) {
    return newsData.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
}
async function trendingfetch(trending) {
    const news = await fetchnews(trending);
    const trendingnews = sortByPublishedAt(news);
    trendingnews.map((item, index) => {
        console.log(item.publishedAt);
        if (index == 0) {
            trendingpage.innerHTML =
                `<i class="fa-sharp fa-solid fa-bookmark" style="color: dimgray;"></i> 
        <a  href="${item.url}" target="_blank">
        <img src="${item.urlToImage}" alt="">
        <div class="para-1">
        ${item.description}
        </div>
        </a>`
        }

        if (index != 0) {
            trendingcards.innerHTML +=
                `<div class="subcard">   
            <i class="fa-sharp fa-solid fa-bookmark" style="color:dimgray;"></i>
             <a  href="${item.url}" target="_blank">
                <img src="${item.urlToImage}" alt=""></img>
                <div class="para">
                ${item.description};
                </div>
                </div>
                </a>`
        }
    })
}


newsbar.onclick = (e) =>{
    if(e.target.className==="fa-sharp fa-solid fa-bookmark"){
            console.log(e.target.className);
            console.log(e.target.style.color);
           if(e.target.style.color==="dimgray"){
             e.target.style.color="yellow";
             addToLocalStorage(e);
            }else if(e.target.style.color==="yellow"){
                e.target.style.color="dimgray";
                removeFromSavedList(e);
            
            }
}
}
categorydisplay.onclick = (e) =>{
    if(e.target.className==="fa-sharp fa-solid fa-bookmark"){
            console.log(e.target.className);
            console.log(e.target.style.color);
           if(e.target.style.color==="dimgray"){
             e.target.style.color="yellow";
             addToLocalStorage(e);
            }else if(e.target.style.color="yellow"){
                e.target.style.color==="dimgray";
                removeFromSavedList(e);
            }
}
}
bookmarkbtn.onclick = () => {
showbookmark();
}

function showbookmark (){
    let bookmarkarr = JSON.parse(localStorage.getItem("savedNews"));
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h1>Bookmarks</h1>";
    bookmarkarr.map((item)=>{
     categorydisplay.innerHTML +=
        `<div class="categorycard">
<i class="fa-sharp fa-solid fa-bookmark" style="color:yellow;"></i>
<a  href="${item.url}" target="_blank">
<div class="categoryimg">
<img src="${item.urlToImage}" alt="no-preview">
</div>
<div class="categorycontent">${item.description}</div>
</a>
</div>
` 
    })
} 

let savedarray = []

function addToLocalStorage(e) {
    let description = e.target.parentNode.innerText;
    let url = e.target.parentNode.children[1].href;
    let img = e.target.parentNode.children[1].childNodes[1].currentSrc;

     console.log(e)
    let currentObject = {
        "description": description,
        "url": url,
        "urlToImage": img,
    }
    savedarray.push(currentObject);
    localStorage.setItem("savedNews", JSON.stringify(savedarray));
    console.log(savedarray)
}

function removeFromSavedList(e){
    e.stopPropagation();
    let description = e.target.parentNode.innerText;
    console.log(description);
    newArray = savedarray.filter((item)=>{
      return item["description"] !== description;
    });
    savedarray = [...newArray];
    // console.log(newArray, "--new array");
    localStorage.setItem("savedNews",JSON.stringify(savedarray));
    showbookmark();
  };

// login functionality
// javascript code goes here

let signupForm = document.getElementById("signup-form");
let signinForm  = document.getElementById("signin-form")
let togglebtn=document.getElementById("toggle-btn");

signupForm.style.display="block";
signinForm.style.display="none";

togglebtn.addEventListener("click",function() {
    if(signupForm.style.display==="block"){
        signupForm.style.display="none"
        signinForm.style.display="block"
        togglebtn.textContent="Don't have an account? Sign Up!";
    }else{
        signinForm.style.display="none"
        signupForm.style.display="block"
        togglebtn.textContent="Already have an account? Sign In!";
    }
})
let loginform = document.querySelector(".loginform");
loginbtn.onclick=()=>{
    loginform.style.display="block";
}
closebtnicon.onclick = () => {
    loginform.style.display="none";
    console.log(closebtnicon);
}


// time fnctionality
const timeElement = document.querySelector(".date-time");
// const dateElement=document.querySelector(".date");
function formatTime(date) {
    const hours12 = date.getHours();
    const minutes = date.getMinutes();
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} IST`
}

function formatDate(date) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
setInterval(() => {
    const now = new Date();
    timeElement.textContent = formatTime(now) + "  |  ";
    timeElement.textContent += formatDate(now);
    // dateElement.textContent = formatDate(now);
}, 200)




// setTimeout(() => {
//     document.querySelectorAll('.fa-sharp')[1].addEventListener('click', () => {
//         console.log("hi");
//     })
// }, 1000)




// if(e.target.className==="fa-sharp fa-solid fa-bookmark"){
//     console.log(e.target.className);
//     console.log(e.target.style.color);
//   if(e.target.style.color==="dimgray"){
//     console.log(e.target.style.color)
//     e.target.style.color="black";
//     addToLocalStorage(e);
//     }
// 
