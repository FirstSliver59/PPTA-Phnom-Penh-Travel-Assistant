import {LOCATIONS} from "./data.js"
window.addEventListener("DOMContentLoaded", () => {
    main()
})


function main() {
    startSlideshow()
    dotsSetup()
    locationCardSetup("All")
    tabBarSetup()
    //createModal(1)
}

// Slideshow

const dots = document.querySelectorAll(".dot")

const homeSlides = document.querySelectorAll(".homeSlide")
let index = 0

let interval

function startSlideshow(){
    showNextSlide()
    interval = setInterval(showNextSlide, 4000)
}

function showNextSlide(){
    index += 1
    if(index > homeSlides.length){index = 1}

    for(let slide of homeSlides){
        slide.style.display = ""
    }
    for(let dot of dots){
        dot.classList.remove("dot-active")
    }

    homeSlides[index-1].style.display = "block"
    dots[index-1].classList.add("dot-active")
}

function dotsSetup(){
    for(let i = 0; i < dots.length; i++){
        dots[i].addEventListener("click", () => {
            index = i
            clearInterval(interval)
            startSlideshow()
        })
    }
}

// Location Cards

const locationWrapper = document.querySelector(".location-wrapper")
const sortedLocations = LOCATIONS.sort(function(a, b){return b.rating - a.rating})

function locationCardSetup(type){
    locationWrapper.innerHTML = ``


    for(let i = 0; i < LOCATIONS.length; i++){
        if(type == "All"){
            createLocationCard(i)
        }else if(sortedLocations[i].category == type){
            createLocationCard(i)
        }
    }

    let btns = document.querySelectorAll(`[data-btnid]`)
    for(let btn of btns){
        btn.addEventListener("click", () => {
        createModal(btn.dataset.btnid)
    })
    }
    
}

function createLocationCard(id){
    locationWrapper.innerHTML += `
            <div class="location">
                <div  class="location-thumbnail">
                <img src="${sortedLocations[id].image}" alt="">
                <a href="#" class="link category">${sortedLocations[id].category}</a>
                </div>

                <div class="location-detail">
                <div class="rating">
                    ${getRating(id)}
                </div>
                <h4 class="location-name">${sortedLocations[id].name}</h4>
                <button class="btn detail-btn" data-btnid="${id}">Show Details</button>

                </div>
            </div>
    `
    
}

function getRating(id){
    let rating = ``

    for(let i = 0; i < sortedLocations[id].rating; i++){
        rating += `<ion-icon name="star"></ion-icon>`
    }

    for(let i = 0; i < (5 - sortedLocations[id].rating); i++){
        rating += `<ion-icon name="star-outline"></ion-icon>`
    }

    return rating
}

// Modals

const modalWrapper = document.querySelector(".modal-wrapper")

function createModal(id){
    modalWrapper.innerHTML = `
    <div class="modal-container">
      <div class="modal-overlay">
        <div class="modal-head">
          <h4>${sortedLocations[id].name}</h4>

          <a href="#" class="link" id="closeBtn">
            <ion-icon name="close-circle"></ion-icon>
          </a>
        </div>

        <div class="modal-body">
          <div class="tabbar">
            <button class="btn modaltabbtn tabbtn btn-active" data-tabid="Description">Description</button>
            <button class="btn modaltabbtn tabbtn" data-tabid="Location">Location</button>
            <button class="btn modaltabbtn tabbtn" data-tabid="Reviews">Reviews</button>
            <button class="btn modaltabbtn tabbtn" data-tabid="Price">Price</button>
          </div>

          <div class="tabbar-body">
            <section class="tab modaltab tab-active" id="Description">
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum voluptate optio voluptatum numquam facilis eum autem eveniet expedita obcaecati perspiciatis officiis, ducimus, doloribus modi quod hic esse soluta. In.</p>
            </section>

            <section class="tab modaltab" id="Location">
              <h3>Ingredients</h3>
              <ul>
                <li>500g desiccated coconut</li>
                <li>200g plain flour</li>
                <li>1 egg, beaten</li>
                <li>50ml vegetable oil</li>
                <li>70g mayonnaise</li>
                <li>30g sweet chilli sauce</li>
              </ul>
            </section>


            <section class="tab modaltab" id="Reviews">
              <h3>Directions</h3>
              <div class="step">
                <h4>Step 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt!</p>
              </div>
              <div class="step">
                <h4>Step 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt!</p>
              </div>
              <div class="step">
                <h4>Step 3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt!</p>
              </div>
            </section>

            <section class="tab modaltab tab-active" id="Description">
              
            </section>
          </div>

        </div>
      </div>
    </div>
    </div>
    `

    const closeBtn = document.querySelector("#closeBtn")

    closeBtn.addEventListener("click", () => {
        modalWrapper.innerHTML = ``
    })

    const tabBtns = document.querySelectorAll(".modaltabbtn")
    const tabs = document.querySelectorAll(".modaltab")

    for(let tab of tabBtns){
        tab.addEventListener("click", () => {
            setModalTab(tab, tabBtns)
            for(let tabBox of tabs){
                tabBox.classList.remove("tab-active")
                if(tabBox.id == tab.dataset.tabid){
                    tabBox.classList.add("tab-active")
                }
            }
        })
    }
}

function setModalTab(activeTab, tabs){
    for(let tab of tabs){
        if(tab.classList.contains("btn-active")){
            tab.classList.remove("btn-active")
        }else if(tab == activeTab){
            tab.classList.add("btn-active")
        }
    }
}

// Home Tabbar

const tabBtns = document.querySelectorAll(".homeTab")

function tabBarSetup(){
    for(let btn of tabBtns){
        btn.addEventListener("click", () => {
            setActiveTab(btn)
        })
    }
}

function setActiveTab(activeBtn){
    for(let btn of tabBtns){
        if(btn.classList.contains("btn-active")){
            btn.classList.remove("btn-active")
        }
        if(btn == activeBtn){
            btn.classList.add("btn-active")
        }
    }

    locationCardSetup(activeBtn.dataset.tabid)
}

// Sidenav

const hamburger = document.querySelector("#sidenavBtn")
const sidenav = document.querySelector(".sidenav")

hamburger.addEventListener("click", () => {
    if(sidenav.classList.contains("showSidenav")){
        sidenav.classList.remove("showSidenav")
    }else{
        sidenav.classList.add("showSidenav")
    }
})