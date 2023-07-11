let savednews={}
let savedarray=[]
const allCategoryUrl =
  "https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news";

const cardContainer = document.getElementsByClassName("news-bar")[0];
let alldata=[];
async function getApiData(url) {
  try {
    const response = await fetch(url);
    const data =  await response.json();
    // console.log("fetch");
    // console.log(data);
    alldata=data;     // this will return object ,but outside it will return promise
    return data;
    // createCards(data);
  } catch (error) {
    console.log("Error is:" + error);
  }
}


function createCards(dataArray) {
  // console.log(dataArray);
  cardContainer.innerHTML="";
  dataArray.map((item) => {
    cardContainer.innerHTML += 
    `<div class="news-item">
        <div class="news-title">
        <p>by ${item[" author"]}</p>
        <p>category ${item[" category"]}</p>
        </div>
        <div class="news-content">
                <p>${item.content}</p>
                <a href="${item.url}">Read More</a></div>
                <i id="${item[" category"]}" class="fa-solid fa-heart"></i>
                </div>
                </div>`;
  });
}

async function fetchAndGenerate(url, myFunction) {
  const data = await getApiData(url);
  myFunction(data);
}

fetchAndGenerate(allCategoryUrl, createCards);
// ------------

const categoryselect=document.querySelector(".category-bar");
// console.log(categoryselect)

let result=[];
categoryselect.onclick = (e) =>{
  let val=e.target.innerHTML;
  if(val==="All"){
    cardContainer.innerHTML = ''
    fetchAndGenerate(allCategoryUrl, createCards);
  }else{
    result= alldata.filter((item)=>(item[" category"]===val))
 cardContainer.innerHTML = ''
//  return filtereddata
createCards(result)
  }
 
// console.log(result)
}


cardContainer.onclick=(e)=>{
  console.log(e)
  if(e.target.className==="fa-solid fa-heart"){
    //  e.target.classList.add="fa-solid fa-heart"
      
      if(e.target.style.color==="red"){
        e.target.style.color=""
        removeFromSavedList(e);
      }else{
        e.target.style.color="red"
        addToLocalStorage(e);
      }
  }

  // create array heart-> that particular card ->
}

// collapsable side bar//
const opensidebarbtn = document.getElementById("sidebar");
opensidebarbtn.onclick=(e)=>{
  document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("mySidebar").style.height = "1000px";
  document.getElementById("main").style.marginLeft = "250px";
}

const closesidebarbtn = document.querySelector(".closebtn");
closesidebarbtn.onclick=(e)=>{
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("mySidebar").style.height = "0";
  document.getElementById("main").style.marginLeft="0";
}

const loginaccess = document.getElementById("loginaccess");
loginaccess.onclick=(e) =>{
  
}
// saved items
/* // saved items
1. heart button click - add that card to empty array
2. then run a function that adds that array to local storage
3. on click of saved items button - run a function that fetches local storage data and pass that data to create cards.
*/

function addToLocalStorage (e){
  let author=e.target.parentElement.firstElementChild.firstElementChild.innerHTML ;
  let category=e.target.parentElement.firstElementChild.lastElementChild.innerHTML;
  let content=e.target.previousElementSibling.firstElementChild.innerText;
  let url=e.target.previousElementSibling.lastElementChild.href;
  // console.log(array)
  let currentObject={
    " category": category,
    " author":author,
    "content":content,
    "url":url
  }
  savedarray.push(currentObject);
 localStorage.setItem("savedNews",JSON.stringify(savedarray));

//   console.log(savedarray)
// savedarray.forEach((item)=>{
// })
 }
function showFavourites() {
 let favourite = JSON.parse(localStorage.getItem("savedNews"));
 console.log(favourite)
 createCards(favourite)
}

function removeFromSavedList(){

};
