// varibles
//let apiarray=["3b4613ef7b604936bbc82426671ddb95","b8155f2365844483ba6e79d41006c458"]

// navbar variables
const businessbtn = document.getElementById("business");
const sportsbtn = document.getElementById("sports");
const entertainmentbtn = document.getElementById("entertainment");
const technologybtn = document.getElementById("technology");
const navbarclosebtn=document.getElementsByClassName("nav-closebtn")[0];
let loginbtn1 = document.getElementById("biguser");
let loginbtn2 = document.getElementById("smalluser");
const country = document.getElementById("countrySelect");
// navbar variables

// searchbar variables
const searchbtn = document.querySelector(".search-btn");
const hamburgerbar = document.getElementsByClassName("hamburger")[0];
const bookmarkbtn = document.querySelector(".bookmarks");
const mediabookmarkbtn = document.getElementById("media-bookmarks");
// searchbar variables

const closebtnicon = document.querySelector(".close-icon-btn");
const categorypage = document.querySelector(".categorycards");
const frontpage = document.querySelector(".newsbar");
const headlinespage = document.querySelector(".maincards-1");
const headlinescards = document.querySelector(".subcards");
const trendingpage = document.querySelector(".maincards-2");
const newsbar = document.querySelector(".newsbar");
const trendingcards = document.querySelector(".subcards-2")
const headlines = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8155f2365844483ba6e79d41006c458";
const trending = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b8155f2365844483ba6e79d41006c458"
const categorytitle = document.querySelector(".category-title");
const categorydisplay = document.querySelector('.categorycardsdsply');
// varibles

let countryNameKey = "in";

// to update URL
function urlUpdate(nation, category) {
    return `https://newsapi.org/v2/top-headlines?country=${nation}&category=${category}&apiKey=b8155f2365844483ba6e79d41006c458`
}

// when page loaded..
document.addEventListener('DOMContentLoaded', () => {
    headlinesfetch(headlines);
    trendingfetch(trending);
})

//data fetch
async function fetchnews(url) {
    try {
    const response = await fetch(url)
    const data = await response.json();
    newsarr = data.articles;
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
        `<div class="categorycard">
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
    }
    }

// categoryfetch(urlUpdate);

// to update country
country.addEventListener("click", (e) => {
    countryNameKey = e.target.value;
})

// to update business category
businessbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Business</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})

// to update sports category
sportsbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Sports</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})

// to update technology category
technologybtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Technology</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})

// to update entertainment category
entertainmentbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    categorytitle.innerHTML = "<h3>Entertainment</h3>";
    let category = e.target.innerText.toLowerCase();
    let url = urlUpdate(countryNameKey, category);
    categoryfetch(url);
})

// to fetch search based news
searchbtn.addEventListener("click", (e) => {
    frontpage.style.display = "none";
    categorydisplay.innerHTML = ""
    categorypage.style.display = "flex"
    let searchinput = document.querySelector(".search").value;
    let searchurl = `https://newsapi.org/v2/everything?q=${searchinput}&apiKey=b8155f2365844483ba6e79d41006c458`;
    console.log(searchinput)
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

// to fetch headlines news when page loaded
async function headlinesfetch(headlines) {
    const headlinesnews = await fetchnews(headlines);
    headlinesnews.map((item, index) => {
        if(index == 0){
            headlinespage.innerHTML =
            ` <i class="fa-sharp fa-solid fa-bookmark" style="color:dimgray;"></i>
            <a  href="${item.url}" target="_blank">
            <img src="${item.urlToImage}" alt="">
            <div class="para-1">
            ${item.description}
            </div>
            </a>`
        }

        if(index != 0){
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
// to sort news based on time
function sortByPublishedAt(newsData) {
    return newsData.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
}
async function trendingfetch(trending) {
    const news = await fetchnews(trending);
    const trendingnews = sortByPublishedAt(news);
    trendingnews.map((item, index) => {
        if(index == 0){
        trendingpage.innerHTML =
        `<i class="fa-sharp fa-solid fa-bookmark" style="color: dimgray;"></i> 
        <a  href="${item.url}" target="_blank">
        <img src="${item.urlToImage}" alt="">
        <div class="para-1">
        ${item.description}
        </div>
        </a>`
        }

        if(index != 0){
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

// to click bookmark on newsbar
newsbar.onclick = (e) =>{
    if(e.target.className==="fa-sharp fa-solid fa-bookmark"){
        if(e.target.style.color==="dimgray"){
            e.target.style.color="yellow";
            addToLocalStorage(e);
        }else if(e.target.style.color==="yellow"){
            e.target.style.color="dimgray";
            removeFromSavedList(e);

        }
}
}

// to click bookmark on categorycard
categorydisplay.onclick = (e) =>{
    if(e.target.className==="fa-sharp fa-solid fa-bookmark"){
    if(e.target.style.color==="dimgray"){
        e.target.style.color="yellow";
        addToLocalStorage(e);
    }else if(e.target.style.color="yellow"){
        e.target.style.color==="dimgray";
        removeFromSavedList(e);
    }
    }
}

//  to see saved bookmarks
bookmarkbtn.onclick = () => {
    showbookmark();
}
mediabookmarkbtn.onclick = () => {
    showbookmark();
 }

//  bookamrk data functionality
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

//  to add book mark on local storage
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

// to remove book mark from local storage
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
let signupForm = document.getElementById("signup-form");
let signinForm  = document.getElementById("signin-form")
let togglebtn=document.getElementById("toggle-btn");


function toggleaccount() {
    if(signupForm.style.display==="block"){
        signupForm.style.display="none"
        signinForm.style.display="block"
        togglebtn.textContent="Don't have an account? Sign Up!";
    }else{
        signinForm.style.display="none"
        signupForm.style.display="block"
        togglebtn.textContent="Already have an account? Sign In!";
    }
}
let loginform = document.querySelector(".loginform");

function logindisplay(){
    closebtnicon.onclick = () => {
        loginform.style.display="none";
        console.log(closebtnicon);
    }
}

loginbtn1.onclick=(e)=>{
    loginform.style.display="block";
    signupForm.style.display="block";
    togglebtn.onclick = ()=>{
        toggleaccount()
    }
    closebtnicon.onclick = () => {
        loginform.style.display="none";
    }
};
loginbtn2.onclick=(e)=>{
    loginform.style.display="block";
    signupForm.style.display="block"
    togglebtn.onclick = ()=>{
        toggleaccount()
    }
    closebtnicon.onclick = () => {
  loginform.style.display="none";
     }
};

// hamburger functionality
hamburgerbar.onclick=()=>{
 document.querySelector(".navbar").style.display="block";
}

navbarclosebtn.onclick=()=>{
 document.querySelector(".navbar").style.display="none";
}

// time fnctionality
const timeElement = document.querySelector(".date-time");
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

