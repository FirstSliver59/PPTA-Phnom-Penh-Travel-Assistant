import {LOCATIONS} from "./data.js"
window.addEventListener("DOMContentLoaded", () => {
    main()
})


function main() {
    startSlideshow()
    dotsSetup()
    locationCardSetup("All")
    tabBarSetup()
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
let sortedLocations = LOCATIONS.sort(function(a, b){return b.rating - a.rating})

function locationCardSetup(type){
    locationWrapper.innerHTML = ``


    for(let i = 0; i < LOCATIONS.length; i++){
        if(type == "All"){
            createLocationCard(sortedLocations[i])
        }else if(sortedLocations[i] && sortedLocations[i].category == type){
            createLocationCard(sortedLocations[i])
        }
    }

    let btns = document.querySelectorAll(`[data-btnid]`)
    for(let btn of btns){
        btn.addEventListener("click", () => {
        createModal(sortedLocations[btn.dataset.btnid])
    })
    }
    
}

function createLocationCard(id){
    if(!id){return false}
    locationWrapper.innerHTML += `
            <div class="location">
                <div  class="location-thumbnail">
                <img src="${id.image}" alt="">
                <div class="flex">
                    <a href="#" class="link category">${id.category}</a>
                    <a href="#" class="link area">${id.area}</a>
                </div>
                </div>

                <div class="location-detail">
                <div class="rating">
                    ${getRating(id)}
                </div>
                <h4 class="location-name">${id.name}</h4>
                <button class="btn detail-btn" data-btnid="${sortedLocations.indexOf(id)}">Show Details</button>

                </div>
            </div>
    `
    
}

function getRating(id){
    let rating = ``

    for(let i = 0; i < Math.floor(id.rating); i++){
        rating += `<ion-icon name="star"></ion-icon>`
    }

    if(id.rating % 1 != 0){
        rating += `<ion-icon name="star-half-outline"></ion-icon>`
        for(let i = 0; i < (5 - Math.ceil(id.rating)); i++){
            rating += `<ion-icon name="star-outline"></ion-icon>`
        }
    }else{
        for(let i = 0; i < (5 - id.rating); i++){
            rating += `<ion-icon name="star-outline"></ion-icon>`
        }
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
          <h4>${id.name}</h4>

          <a href="#" class="link" id="closeBtn">
            <ion-icon name="close-circle"></ion-icon>
          </a>
        </div>

        <div class="modal-body">
          <div class="tabbar">
            <button class="btn modaltabbtn tabbtn btn-active" data-tabid="Description">Description</button>
            <button class="btn modaltabbtn tabbtn" data-tabid="Location">Location</button>
            <button class="btn modaltabbtn tabbtn" data-tabid="Price">Price</button>
          </div>

          <div class="tabbar-body">
            <section class="tab modaltab tab-active" id="Description">
              <h3>Description</h3>
              <p>${id.description}</p>
            </section>

            <section class="tab modaltab" id="Location">
              <h3>Location</h3>
              <a class="link" href="${id.location}">${id.locationtxt} <-- Click for Map</a>
            </section>


            

            <section class="tab modaltab" id="Price">
            <h3>Price</h3>
            <p>${id.price}</p>
              
            </section>
          </div>

        </div>
      </div>
    </div>
    </div>
    `

    /**<button class="btn modaltabbtn tabbtn" data-tabid="Reviews">Reviews</button>
     * 
     *  <section class="tab modaltab" id="Reviews">
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
            </section> */

    const modalContainer = document.querySelector(".modal-container")

    modalContainer.style.backgroundImage = `url(${id.image})`
    console.log(id.image)
    console.log(modalContainer.style.backgroundImage)

    const closeBtn = document.querySelector("#closeBtn")

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault()
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
    sidenav.classList.toggle("showSidenav")
})

const aboutUsPage = document.querySelector(".aboutUsContainer")
const homeBtn = document.querySelector(".homeBtn")
const aboutUsBtn = document.querySelector(".aboutUsBtn")

homeBtn.addEventListener("click", () => {
    if(!aboutUsPage.classList.contains("hide")){
        aboutUsPage.style.animation = "slideOut 1s"
        setTimeout(() => {
            aboutUsPage.classList.toggle("hide")
            aboutUsPage.style.animation = "slide 1s"
        }, 900);
    }
    window.scrollTo(0, 0)
    sidenav.classList.toggle("showSidenav")
})

aboutUsBtn.addEventListener("click", () => {
    if(!aboutUsPage.classList.contains("hide")){
        aboutUsPage.style.animation = "slideOut 1s"
        setTimeout(() => {
            aboutUsPage.classList.toggle("hide")
            aboutUsPage.style.animation = "slide 1s"
        }, 900);
        
    }else{
        aboutUsPage.classList.toggle("hide")
        window.scrollTo(0, 0)
    }

    sidenav.classList.toggle("showSidenav")
    
})



// Search Bar

const searchInput = document.querySelector(".search-input")
const filterTxt = document.querySelector(".filter")

searchInput.addEventListener("change", () => {
    sortedLocations = LOCATIONS.filter(function(e){
        return  e.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                e.category.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                e.description.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                e.location.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                e.tags.toLowerCase().includes(searchInput.value.toLowerCase())
            
        
    
    }).sort(function(a, b){return b.rating - a.rating})

    setActiveTab(document.querySelector("[data-tabid=All]"))

    locationCardSetup("All")

    if(searchInput.value == ""){
        filterTxt.textContent = ""
    }else{
        filterTxt.textContent = `Filter = "${searchInput.value}"`
    }
})