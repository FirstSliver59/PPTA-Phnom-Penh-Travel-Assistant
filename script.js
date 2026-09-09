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
                <button class="btn detail-btn" id="detail-btn-${id}">Show Details</button>

                </div>
            </div>
    `
    let btn = document.querySelector(`#detail-btn-${id}`)
    btn.addEventListener("click", () => {
        console.log("I was clicked!")
    })
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



// Tabbars

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