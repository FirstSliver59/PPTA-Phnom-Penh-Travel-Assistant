const LOCATIONS = [
    {
        name: "The Collab Coffee",
        category: "Drinks only",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/the collab.jpg",
        rating: 4.8, // Will only be displayed to the nearest 0.5 stars
        description: "A Coffee shop that sells all kinds of drinks but their specialty is matcha.",
        locationtxt: "TTP st 138", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/The+collab+coffee/@11.5665701,104.8247638,13z/data=!4m10!1m2!2m1!1sthe+collab+coffee+ttp!3m6!1s0x310951000428cea1:0x8fa36fd265c0de3e!8m2!3d11.5665701!4d104.9009815!15sChV0aGUgY29sbGFiIGNvZmZlZSB0dHBaFyIVdGhlIGNvbGxhYiBjb2ZmZWUgdHRwkgELY29mZmVlX3Nob3CaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhDTVZKVE1YRlVNamw2WWxWc2JWcHJlR0ZQUlZZd1RtdG9kbGRGUlJBQuABAPoBBAgAECQ!16s%2Fg%2F11x0dfwgjc?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D",
        area: "TTP", // Broad area tag that is shown on the card
        price: "It costs nothing to go here.",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    },
    {
        name: "Hotel",
        category: "Stay",
        image: "./images/stay test.jpeg",
        rating: 5,
        description: "Just your average hotel.",
        location: "This place is definitely real, and not just a stock photo. I swear.",
        price: "Uhhh.. $50 a night I guess.",
        reviews: ["probably won't have time to use these..."],
        tags: ""
    },
    {
        name: "McDonald's",
        category: "Food",
        image: "./images/food test.jpeg",
        rating: 4,
        description: "The fast-food restaurant.",
        location: "Mars.",
        price: "More every day. It's 'inflation' trust",
        reviews: ["probably won't have time to use these..."],
        tags: ""
    }
    
]

export {
    LOCATIONS
}