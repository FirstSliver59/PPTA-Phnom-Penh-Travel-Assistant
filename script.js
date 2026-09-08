import {LOCATIONS} from "./data.js"
window.addEventListener("DOMContentLoaded", () => {
    main()
})


function main() {
    startSlideshow()
    dotsSetup()
    locationCardSetup()
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

function locationCardSetup(){
    for(let i = 0; i < LOCATIONS.length; i++){
        createLocationCard(i)
    }
}

function createLocationCard(id){
    locationWrapper.innerHTML += `
            <div class="location">
                <div  class="location-thumbnail">
                <img src="${LOCATIONS[id].image}" alt="">
                <a href="#" class="link category">${LOCATIONS[id].category}</a>
                </div>

                <div class="location-detail">
                <div class="rating">
                    ${getRating(id)}
                </div>
                <h4 class="location-name">${LOCATIONS[id].name}</h4>
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

    for(let i = 0; i < LOCATIONS[id].rating; i++){
        rating += `<ion-icon name="star"></ion-icon>`
    }

    for(let i = 0; i < (5 - LOCATIONS[id].rating); i++){
        rating += `<ion-icon name="star-outline"></ion-icon>`
    }

    return rating
}

// Modals

