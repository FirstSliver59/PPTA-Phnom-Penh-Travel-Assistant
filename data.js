const LOCATIONS = [
    {
        name: "The Collab Coffee",
        category: "Drinks only",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/the_collab.jpg",
        rating: 4.8, // Will only be displayed to the nearest 0.5 stars
        description: "A Coffee shop that sells all kinds of drinks but their specialty is matcha.",
        locationtxt: "TTP st 138", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/The+collab+coffee/@11.5665701,104.8247638,13z/data=!4m10!1m2!2m1!1sthe+collab+coffee+ttp!3m6!1s0x310951000428cea1:0x8fa36fd265c0de3e!8m2!3d11.5665701!4d104.9009815!15sChV0aGUgY29sbGFiIGNvZmZlZSB0dHBaFyIVdGhlIGNvbGxhYiBjb2ZmZWUgdHRwkgELY29mZmVlX3Nob3CaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhDTVZKVE1YRlVNamw2WWxWc2JWcHJlR0ZQUlZZd1RtdG9kbGRGUlJBQuABAPoBBAgAECQ!16s%2Fg%2F11x0dfwgjc?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D",
        area: "TTP", // Broad area tag that is shown on the card
        price: "It costs nothing to go here.",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    },
    { // Food
        name: "Marugame Udon",
        category: "Foods",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/Marugame udon.jpg",
        rating: 4.0, // Will only be displayed to the nearest 0.5 stars
        description: "A Japanese Udon restaruant that originally sells Udon but later on developing new dishes like fried chicken rice...etc",
        locationtxt: "TTP st 155 corner of st 472", // Name of location, put link in "location: "
        location: "https://share.google/QrmD9MHrBz9amyjBE",
        area: "TTP", // Broad area tag that is shown on the card
        price: "The most popular order would be Nikutama Bukkake Udon which is number 1 on the menu. Cost around 5$ for L size bowl but 4.75$ for regular sized bowl.",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    },
    {
        name: "MeatoPhum",
        category: "Foods",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/meatophum.avif",
        rating: 3.5, // Will only be displayed to the nearest 0.5 stars
        description: "A cambodian restaraunt that sells Cambodian food, if struggling to find a cambodian restaraunt that provide amazing Khmer dishes, meatophum is the way to go.",
        locationtxt: "TTP st 430", // Name of location, put link in "location: "
        location: "https://maps.app.goo.gl/nTwiHG2uZkKJxrxM7",
        area: "TTP", // Broad area tag that is shown on the card
        price: "5-20$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    },
    {
        name: "Mealea",
        category: "Foods",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/unnamed.jpg",
        rating: 4.5, // Will only be displayed to the nearest 0.5 stars
        description: "A cambodian  fancy restaraunt that sells Cambodian food, if struggling to find a cambodian restaraunt that provide amazing Khmer dishes, mealea is the way to go.",
        locationtxt: "corner of, 44, Sothearos Blvd, street 240, Chumne 12206", // Name of location, put link in "location: "
        location: "https://maps.app.goo.gl/nTwiHG2uZkKJxrxM7",
        area: "TTP", // Broad area tag that is shown on the card
        price: "14-45$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    }, // stay
    {
    name: "iRoHa Garden Hotel & Resort",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/iroha.jpg",
    rating: 4.8,
    description: "A peaceful boutique resort with a tropical garden and swimming pool just minutes from Russian Market.",
    locationtxt: "Street 73, Toul Tom Poung",
    location: "https://maps.google.com/?q=iRoHa+Garden+Hotel+Phnom+Penh",
    area: "TTP",
    price: "From $70–110 per night",
    reviews: ["Peaceful garden setting with friendly staff and spotless rooms."],
    tags: "ttp"
  },
  {
    name: "Anik Boutique Hotel & Spa",
    category: "Hotel & Spa",
    categoryId: "Stay",
    image: "./images/anik.jpg",
    rating: 4.7,
    description: "An elegant hotel featuring a rooftop pool, spa, gym, and comfortable rooms within walking distance of Toul Tom Poung.",
    locationtxt: "Street 278, Toul Tom Poung",
    location: "https://maps.google.com/?q=Anik+Boutique+Hotel+Phnom+Penh",
    area: "TTP",
    price: "From $55–85 per night",
    reviews: ["Relaxing spa, comfortable beds, and excellent customer service."],
    tags: "ttp"
  },
  {
    name: "The Frangipani Living Arts Hotel & Spa",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/frangipani.jpg",
    rating: 4.6,
    description: "A stylish boutique stay known for its Khmer-inspired design, outdoor pool, and relaxing atmosphere close to the Russian Market.",
    locationtxt: "Street 123, Toul Tom Poung",
    location: "https://maps.google.com/?q=The+Frangipani+Living+Arts+Hotel+Phnom+Penh",
    area: "TTP",
    price: "From $45–75 per night",
    reviews: ["Stylish Khmer design and a quiet atmosphere near Russian Market."],
    tags: "ttp"
  },
  {
    name: "Dutch Hosted B&B",
    category: "Bed & Breakfast",
    categoryId: "Stay",
    image: "./images/dutch-hosted.jpg",
    rating: 4.8,
    description: "A cozy and highly rated guesthouse offering personalized service, modern rooms, and a quiet neighborhood just minutes from TTP.",
    locationtxt: "Street 105, Toul Tom Poung",
    location: "https://maps.google.com/?q=Dutch+Hosted+B%26B+Phnom+Penh",
    area: "TTP",
    price: "From $28–45 per night",
    reviews: ["The hosts were incredibly welcoming and made us feel at home."],
    tags: "ttp"
  },
  {
    name: "Ny Ka Smy Hotel",
    category: "Budget Hotel",
    categoryId: "Stay",
    image: "./images/nyka.jpg",
    rating: 4.5,
    description: "A modern budget-friendly hotel with clean rooms, free Wi-Fi, and excellent value for travelers staying in the Toul Tom Poung area.",
    locationtxt: "Street 430, Toul Tom Poung",
    location: "https://maps.google.com/?q=Ny+Ka+Smy+Hotel+Phnom+Penh",
    area: "TTP",
    price: "From $25–40 per night",
    reviews: ["Affordable stay with modern rooms and reliable Wi-Fi."],
    tags: "ttp"
  },
    {
        name: "Hotel",
        category: "Stay",
        image: "./images/stay_test.jpeg",
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