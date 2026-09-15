const LOCATIONS = [
    {
        name: "The Collab Coffee",
        category: "Drinks",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/the_collab.jpg",
        rating: 4.8, // Will only be displayed to the nearest 0.5 stars
        description: "A Coffee shop that sells all kinds of drinks but their specialty is matcha.",
        locationtxt: "TTP st 138", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/The+collab+coffee/@11.5665701,104.8247638,13z/data=!4m10!1m2!2m1!1sthe+collab+coffee+ttp!3m6!1s0x310951000428cea1:0x8fa36fd265c0de3e!8m2!3d11.5665701!4d104.9009815!15sChV0aGUgY29sbGFiIGNvZmZlZSB0dHBaFyIVdGhlIGNvbGxhYiBjb2ZmZWUgdHRwkgELY29mZmVlX3Nob3CaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhDTVZKVE1YRlVNamw2WWxWc2JWcHJlR0ZQUlZZd1RtdG9kbGRGUlJBQuABAPoBBAgAECQ!16s%2Fg%2F11x0dfwgjc?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D",
        area: "TTP", // Broad area tag that is shown on the card
        price: "Around 2.5$ to 3.5$ per drink(Matchas)",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    },
    { // Food
        name: "Marugame Udon",
        category: "Foods",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/Marugame.jpg",
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
        image: "./images/meatophum.jpg",
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
        name: "Super Meats",
        category: "Food",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/supermeats.jpg",
        rating: 4.9, // Will only be displayed to the nearest 0.5 stars
        description: "Sells the best burgers I've had since being in Cambodia, as well as boere rolls. They are only open on saturdays, though.",
        locationtxt: "TTP st 456", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/Super+Meats/@11.5389618,104.9145149,17z/data=!3m1!4b1!4m6!3m5!1s0x310951d36338f5d5:0x248fcb2e0413fa23!8m2!3d11.5389618!4d104.9145149!16s%2Fg%2F11hf258b47?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
        area: "TTP", // Broad area tag that is shown on the card
        price: "3-5$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "ttp" // Gets added to the search filter - not displayed for user
    },
    {
        name: "BKK1 Mixed Rice",
        category: "Food",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/mixedrice.jpg",
        rating: 4.9, // Will only be displayed to the nearest 0.5 stars
        description: "They sell rice bowls with toppings.",
        locationtxt: "BKK1 st 294", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/BKK1+Mixed+Rice/@11.5532341,104.9204487,17z/data=!3m1!4b1!4m6!3m5!1s0x3109510023c77d17:0x6090ac5d48941335!8m2!3d11.5532289!4d104.9230236!16s%2Fg%2F11yyxbx3wf?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
        area: "BKK1", // Broad area tag that is shown on the card
        price: "1-5$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "bkk1" // Gets added to the search filter - not displayed for user
    },
    {
        name: "Eleven One Kitchen",
        category: "Food",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/elevenone.jpeg",
        rating: 4.5, // Will only be displayed to the nearest 0.5 stars
        description: "A variety of Cambodian food, including all you can eat and vegan options.",
        locationtxt: "BKK1 st 334", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/Eleven+One+Kitchen+-+BKK1/@11.5501525,104.9238127,17z/data=!3m1!4b1!4m6!3m5!1s0x310951241139ee63:0xe367aa8b9c37ce64!8m2!3d11.5501473!4d104.9263876!16s%2Fg%2F11dxc0gvh3?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
        area: "BKK1", // Broad area tag that is shown on the card
        price: "10-15$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "bkk1" // Gets added to the search filter - not displayed for user
    },
    {
        name: "Farm To Table",
        category: "Food",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/farmtotable.jpeg",
        rating: 4.4, // Will only be displayed to the nearest 0.5 stars
        description: "Relaxed, modern outdoor eatery offering a locally sourced menu of international dishes & cocktails.",
        locationtxt: "BKK1 st 360", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/Farm+To+Table/@11.5487176,104.9238975,17z/data=!4m8!3m7!1s0x31095125fd4a7bd1:0x2039e90e4d655271!8m2!3d11.5487124!4d104.9264724!9m1!1b1!16s%2Fg%2F11cly59f9t?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
        area: "BKK1", // Broad area tag that is shown on the card
        price: "5-10$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "bkk1" // Gets added to the search filter - not displayed for user
    },
    {
        name: "Pepper Lunch",
        category: "Food",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/pepperlunch.jpeg",
        rating: 4.8, // Will only be displayed to the nearest 0.5 stars
        description: "Open every day from 9am to 10pm.",
        locationtxt: "BKK1 st 51", // Name of location, put link in "location: "
        location: "https://www.google.com/maps/place/Pepper+Lunch+BKK1/@11.5523709,104.9243147,17z/data=!3m1!4b1!4m6!3m5!1s0x3109514e674f9ea5:0xde95f1662db19292!8m2!3d11.5523658!4d104.9268163!16s%2Fg%2F11wxhcnsd_?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
        area: "BKK1", // Broad area tag that is shown on the card
        price: "5-10$ per person",
        reviews: ["probably won't have time to use these..."], // Probably don't fill this out
        tags: "bkk1" // Gets added to the search filter - not displayed for user
    },
    {
        name: "Mealea",
        category: "Foods",
        categoryId: "Food", // Please only use "Food", "Visit", or "Stay". For use with the filter tabs
        image: "./images/mealea.jpg",
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
    image: "./images/iRoHa Garden Hotel & Resort.jpg",
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
    image: "./images/The Frangipani Living Arts Hotel & Spa.jpg",
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
    image: "./images/Dutch Hosted B&B.jpg",
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
    image: "./images/Ny Ka Smy Hotel.jpg",
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
    name: "Baitong Hotel & Resort",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/baitong.jpg",
    rating: 4.6,
    description: "Luxury boutique hotel with a tropical pool and modern rooms.",
    locationtxt: "Street 282, BKK1",
    location: "https://maps.google.com/?q=Baitong+Hotel+Resort+Phnom+Penh",
    area: "BKK1",
    price: "From $53 per night",
    reviews: ["A beautiful boutique hotel with an amazing pool and excellent service."],
    tags: "bkk1"
  },
  {
    name: "Novotel Phnom Penh BKK 1",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/Novotel Phnom Penh BKK 1.jpg",
    rating: 4.8,
    description: "Modern international hotel with rooftop pool and fitness centre.",
    locationtxt: "Street 51, BKK1",
    location: "https://maps.google.com/?q=Novotel+Phnom+Penh+BKK1",
    area: "BKK1",
    price: "From $93 per night",
    reviews: ["Modern rooms, great breakfast, and a perfect location in BKK1."],
    tags: "bkk1"
  },
  {
    name: "Courtyard by Marriott",
    category: "Business Hotel",
    categoryId: "Stay",
    image: "./images/Courtyard by Marriott.jpg",
    rating: 4.5,
    description: "Popular business hotel near Independence Monument.",
    locationtxt: "Street 214, BKK1",
    location: "https://maps.google.com/?q=Courtyard+by+Marriott+Phnom+Penh",
    area: "BKK1",
    price: "From $76 per night",
    reviews: ["Very comfortable stay with professional staff and a nice rooftop bar."],
    tags: "bkk1"
  },
  {
    name: "CHECK inn Phnom Penh",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/CHECK inn Phnom Penh.jpg",
    rating: 4.1,
    description: "Affordable modern hotel in the heart of BKK1.",
    locationtxt: "Street 282, BKK1",
    location: "https://maps.google.com/?q=CHECK+inn+Phnom+Penh",
    area: "BKK1",
    price: "From $29 per night",
    reviews: ["Clean, affordable, and ideal for exploring the city."],
    tags: "bkk1"
  },
  {
    name: "Aquarius Hotel & Urban Resort",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/Aquarius Hotel & Urban Resort.jpg",
    rating: 4.5,
    description: "Stylish hotel famous for its rooftop infinity pool.",
    locationtxt: "Street 240, BKK1",
    location: "https://maps.google.com/?q=Aquarius+Hotel+Urban+Resort+Phnom+Penh",
    area: "BKK1",
    price: "From $55 per night",
    reviews: ["The rooftop infinity pool offers one of the best views in Phnom Penh."],
    tags: "bkk1"
  },
  {
    name: "Raffles Hotel Le Royal",
    category: "Luxury Hotel",
    categoryId: "Stay",
    image: "./images/Raffles Hotel Le Royal.jpg",
    rating: 4.7,
    description: "Iconic five-star colonial hotel near Wat Phnom.",
    locationtxt: "Street 92, Daun Penh",
    location: "https://maps.google.com/?q=Raffles+Hotel+Le+Royal+Phnom+Penh",
    area: "Daun Penh",
    price: "From $233 per night",
    reviews: ["Elegant colonial hotel with outstanding hospitality and beautiful gardens."],
    tags: "daunpenh"
  },
  {
    name: "Palace Gate Hotel & Resort",
    category: "Luxury Hotel",
    categoryId: "Stay",
    image: "./images/Palace Gate Hotel & Resort.jpg",
    rating: 4.7,
    description: "Elegant hotel beside the Royal Palace with spa and pool.",
    locationtxt: "Sothearos Boulevard",
    location: "https://maps.google.com/?q=Palace+Gate+Hotel+Phnom+Penh",
    area: "Daun Penh",
    price: "From $51 per night",
    reviews: ["Fantastic location just steps from the Royal Palace and riverside."],
    tags: "daunpenh"
  },
  {
    name: "Okay Boutique Hotel",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/ok.jpg",
    rating: 4.1,
    description: "Popular boutique hotel within walking distance of the palace.",
    locationtxt: "Street 19",
    location: "https://maps.google.com/?q=Okay+Boutique+Hotel+Phnom+Penh",
    area: "Daun Penh",
    price: "From $23 per night",
    reviews: ["Great value for money with spacious rooms and a lovely rooftop pool."],
    tags: "daunpenh"
  },
  {
    name: "Hotel Cambodiana",
    category: "Riverside Hotel",
    categoryId: "Stay",
    image: "./images/hotel.jpg",
    rating: 4.2,
    description: "Classic riverside hotel overlooking the Mekong River.",
    locationtxt: "Sisowath Quay",
    location: "https://maps.google.com/?q=Hotel+Cambodiana+Phnom+Penh",
    area: "Daun Penh",
    price: "From $35 per night",
    reviews: ["Classic riverside hotel with peaceful views of the Mekong River."],
    tags: "daunpenh"
  },
  {
    name: "Onederz Phnom Penh",
    category: "Hostel",
    categoryId: "Stay",
    image: "./images/onezdes.jpg",
    rating: 4.4,
    description: "Award-winning hostel with rooftop pool for budget travelers.",
    locationtxt: "Street 110",
    location: "https://maps.google.com/?q=Onederz+Phnom+Penh",
    area: "Daun Penh",
    price: "From $10 per night",
    reviews: ["One of the best hostels with a social atmosphere and clean facilities."],
    tags: "daunpenh"
  },
  {
    name: "Sofitel Phnom Penh Phokeethra",
    category: "Luxury Hotel",
    categoryId: "Stay",
    image: "./images/sofitel.jpg",
    rating: 4.7,
    description: "French luxury hotel with tennis courts and riverside views.",
    locationtxt: "Sothearos Boulevard",
    location: "https://maps.google.com/?q=Sofitel+Phnom+Penh+Phokeethra",
    area: "Tonle Bassac",
    price: "From $168 per night",
    reviews: ["Luxury experience with exceptional dining and beautiful facilities."],
    tags: "tonlebassac"
  },
  {
    name: "SUN & MOON Riverside Hotel",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/sunandmoon.jpg",
    rating: 4.5,
    description: "Modern riverside hotel with rooftop pool.",
    locationtxt: "Norodom Boulevard",
    location: "https://maps.google.com/?q=SUN+MOON+Riverside+Hotel+Phnom+Penh",
    area: "Tonle Bassac",
    price: "From $45 per night",
    reviews: ["Great rooftop pool and stunning views of the Bassac River."],
    tags: "tonlebassac"
  },
  {
    name: "Chaiya Palace Hotel",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/chaiya.jpg",
    rating: 4.7,
    description: "Boutique riverside stay with spacious rooms.",
    locationtxt: "Street 266",
    location: "https://maps.google.com/?q=Chaiya+Palace+Hotel+Phnom+Penh",
    area: "Tonle Bassac",
    price: "From $38 per night",
    reviews: ["Spacious rooms and a peaceful riverside location."],
    tags: "tonlebassac"
  },
  {
    name: "Almond Hotel Bassac River",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/almond.jpg",
    rating: 4.4,
    description: "Comfortable mid-range hotel near AEON Mall.",
    locationtxt: "Rainbow Bridge",
    location: "https://maps.google.com/?q=Almond+Hotel+Bassac+River",
    area: "Tonle Bassac",
    price: "From $34 per night",
    reviews: ["Convenient location near AEON Mall with friendly staff."],
    tags: "tonlebassac"
  },
  {
    name: "Luxcity Hotel & Apartment",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/luxcity.jpg",
    rating: 4.6,
    description: "Contemporary hotel with rooftop pool and apartments.",
    locationtxt: "Tonle Bassac",
    location: "https://maps.google.com/?q=Luxcity+Hotel+Apartment+Phnom+Penh",
    area: "Tonle Bassac",
    price: "From $58 per night",
    reviews: ["Modern apartments with excellent amenities for longer stays."],
    tags: "tonlebassac"
  },
  {
    name: "The Peninsula Phnom Penh",
    category: "Luxury Hotel",
    categoryId: "Stay",
    image: "./images/the peninsula.jpg",
    rating: 4.8,
    description: "Luxury riverside hotel with infinity pool and skyline views.",
    locationtxt: "Keo Chenda Street",
    location: "https://maps.google.com/?q=The+Peninsula+Phnom+Penh",
    area: "Chroy Changvar",
    price: "From $43 per night",
    reviews: ["Amazing skyline views and a fantastic infinity pool."],
    tags: "chroychangvar"
  },
  {
    name: "The Bale Phnom Penh",
    category: "Boutique Resort",
    categoryId: "Stay",
    image: "./images/bale.jpg",
    rating: 4.7,
    description: "Elegant riverside resort with minimalist architecture.",
    locationtxt: "National Road 6A",
    location: "https://maps.google.com/?q=The+Bale+Phnom+Penh",
    area: "Chroy Changvar",
    price: "From $95 per night",
    reviews: ["A quiet luxury retreat with beautiful minimalist architecture."],
    tags: "chroychangvar"
  },
  {
    name: "MekongView Tower",
    category: "Serviced Apartment",
    categoryId: "Stay",
    image: "./images/mekongview.jpg",
    rating: 4.5,
    description: "Apartment style accommodation overlooking the Mekong.",
    locationtxt: "Keo Chenda",
    location: "https://maps.google.com/?q=MekongView+Tower+Phnom+Penh",
    area: "Chroy Changvar",
    price: "From $42 per night",
    reviews: ["Large rooms with wonderful views overlooking the Mekong."],
    tags: "chroychangvar"
  },
  {
    name: "Granferte Phnom Penh Hotel",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/granferte.jpg",
    rating: 4.4,
    description: "Japanese inspired hotel with spacious family rooms.",
    locationtxt: "National Road 6A",
    location: "https://maps.google.com/?q=Granferte+Phnom+Penh+Hotel",
    area: "Chroy Changvar",
    price: "From $55 per night",
    reviews: ["Comfortable family-friendly hotel with excellent Japanese hospitality."],
    tags: "chroychangvar"
  },
  {
    name: "LBN Asian Hotel",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/LBN.jpg",
    rating: 4.3,
    description: "Affordable riverside hotel with city access.",
    locationtxt: "Chroy Changvar",
    location: "https://maps.google.com/?q=LBN+Asian+Hotel+Phnom+Penh",
    area: "Chroy Changvar",
    price: "From $30 per night",
    reviews: ["Clean riverside hotel offering great value for the price."],
    tags: "chroychangvar"
  },
  {
    name: "AMATA Residence",
    category: "Serviced Residence",
    categoryId: "Stay",
    image: "./images/amata.jpg",
    rating: 4.6,
    description: "Modern serviced residence ideal for long stays.",
    locationtxt: "Street 578",
    location: "https://maps.google.com/?q=AMATA+Residence+Phnom+Penh",
    area: "Toul Kork",
    price: "From $31 per night",
    reviews: ["Spacious and modern rooms perfect for extended stays."],
    tags: "toulkork"
  },
  {
    name: "TK View Hotel & Apartment",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/tkview.jpg",
    rating: 4.5,
    description: "Comfortable hotel with rooftop swimming pool.",
    locationtxt: "Street 315",
    location: "https://maps.google.com/?q=TK+View+Hotel+Apartment",
    area: "Toul Kork",
    price: "From $40 per night",
    reviews: ["Nice rooftop pool and convenient access to TK Avenue."],
    tags: "toulkork"
  },
  {
    name: "Midland Hotel",
    category: "Budget Hotel",
    categoryId: "Stay",
    image: "./images/midland.jpg",
    rating: 3.8,
    description: "Budget friendly stay near TK Avenue Mall.",
    locationtxt: "Street 516",
    location: "https://maps.google.com/?q=Midland+Hotel+Phnom+Penh",
    area: "Toul Kork",
    price: "From $16 per night",
    reviews: ["Budget-friendly option with clean rooms and helpful staff."],
    tags: "toulkork"
  },
  {
    name: "Grand Residence",
    category: "Apartment Hotel",
    categoryId: "Stay",
    image: "./images/grandresidence.jpg",
    rating: 4.4,
    description: "Spacious apartment hotel popular with families.",
    locationtxt: "Toul Kork",
    location: "https://maps.google.com/?q=Grand+Residence+Phnom+Penh",
    area: "Toul Kork",
    price: "From $38 per night",
    reviews: ["Comfortable apartment hotel with plenty of space for families."],
    tags: "toulkork"
  },
  {
    name: "Indra Hotel",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/indra.jpg",
    rating: 4.5,
    description: "Stylish boutique hotel with rooftop dining.",
    locationtxt: "Street 592",
    location: "https://maps.google.com/?q=Indra+Hotel+Phnom+Penh",
    area: "Toul Kork",
    price: "From $52 per night",
    reviews: ["Stylish boutique hotel with excellent food and friendly service."],
    tags: "toulkork"
  },
  {
    name: "Fairfield by Marriott Phnom Penh",
    category: "Business Hotel",
    categoryId: "Stay",
    image: "./images/fairfield.jpg",
    rating: 4.6,
    description: "Contemporary Marriott hotel with rooftop pool.",
    locationtxt: "Russian Federation Boulevard",
    location: "https://maps.google.com/?q=Fairfield+by+Marriott+Phnom+Penh",
    area: "Sen Sok",
    price: "From $73 per night",
    reviews: ["Modern Marriott quality with great breakfast and city views."],
    tags: "sensok"
  },
  {
    name: "JD Polman Hotel & Residence",
    category: "Residence",
    categoryId: "Stay",
    image: "./images/jdpolman.jpg",
    rating: 4.4,
    description: "Modern residence with spacious suites and pool.",
    locationtxt: "Hanoi Boulevard",
    location: "https://maps.google.com/?q=JD+Polman+Hotel+Residence",
    area: "Sen Sok",
    price: "From $45 per night",
    reviews: ["Excellent facilities and spacious suites at a reasonable price."],
    tags: "sensok"
  },
  {
    name: "La Cozii TK",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/lacozii.jpg",
    rating: 4.5,
    description: "Minimalist boutique hotel near AEON Sen Sok.",
    locationtxt: "Street 337",
    location: "https://maps.google.com/?q=La+Cozii+TK+Phnom+Penh",
    area: "Sen Sok",
    price: "From $42 per night",
    reviews: ["Minimalist design, comfortable rooms, and a relaxing atmosphere."],
    tags: "sensok"
  },
  {
    name: "The Skye Phnom Penh Hotel",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/skye.jpg",
    rating: 4.5,
    description: "Modern high rise hotel with panoramic city views.",
    locationtxt: "Sen Sok",
    location: "https://maps.google.com/?q=The+Skye+Phnom+Penh+Hotel",
    area: "Sen Sok",
    price: "From $48 per night",
    reviews: ["Beautiful rooftop views and very modern accommodations."],
    tags: "sensok"
  },
  {
    name: "BK Hotel",
    category: "Budget Hotel",
    categoryId: "Stay",
    image: "./images/bkhotel.jpg",
    rating: 4.1,
    description: "Clean and affordable hotel for short stays.",
    locationtxt: "Street 1019",
    location: "https://maps.google.com/?q=BK+Hotel+Phnom+Penh",
    area: "Sen Sok",
    price: "From $15 per night",
    reviews: ["Clean, affordable, and convenient for shopping in Sen Sok."],
    tags: "sensok"
  },
   {
    name: "Citadines Flatiron Phnom Penh",
    category: "Hotel & Residence",
    categoryId: "Stay",
    image: "./images/citadines.jpg",
    rating: 4.5,
    description: "Modern serviced hotel with skyline views.",
    locationtxt: "Street 102",
    location: "https://maps.google.com/?q=Citadines+Flatiron+Phnom+Penh",
    area: "Prampir Makara",
    price: "From $58 per night",
    reviews: ["Modern serviced apartments with excellent skyline views."],
    tags: "prampirmakara"
  },
  {
    name: "TUI SUNEO Olympia Phnom Penh",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/olympia.jpg",
    rating: 4.2,
    description: "Comfortable hotel inside Olympia City development.",
    locationtxt: "Street 217",
    location: "https://maps.google.com/?q=TUI+SUNEO+Olympia+Phnom+Penh",
    area: "Prampir Makara",
    price: "From $51 per night",
    reviews: ["Comfortable stay with great facilities inside Olympia City."],
    tags: "prampirmakara"
  },
  {
    name: "Maxx Phnom Penh Downtown",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/maxx.jpg",
    rating: 4.4,
    description: "Stylish downtown hotel close to Central Market.",
    locationtxt: "Street 105",
    location: "https://maps.google.com/?q=Maxx+Phnom+Penh+Downtown",
    area: "Prampir Makara",
    price: "From $46 per night",
    reviews: ["Stylish downtown hotel close to markets and restaurants."],
    tags: "prampirmakara"
  },
  {
    name: "Orussey One Hotel",
    category: "Hotel",
    categoryId: "Stay",
    image: "./images/orussey.jpg",
    rating: 4.3,
    description: "Modern hotel with rooftop pool near Orussey Market.",
    locationtxt: "Street 107",
    location: "https://maps.google.com/?q=Orussey+One+Hotel+Phnom+Penh",
    area: "Prampir Makara",
    price: "From $37 per night",
    reviews: ["Great rooftop pool and friendly staff near Orussey Market."],
    tags: "prampirmakara"
  },
  {
    name: "G Mekong Hotel",
    category: "Boutique Hotel",
    categoryId: "Stay",
    image: "./images/gmekong.jpg",
    rating: 4.5,
    description: "Boutique hotel with Khmer design and outdoor pool.",
    locationtxt: "Street 126",
    location: "https://maps.google.com/?q=G+Mekong+Hotel+Phnom+Penh",
    area: "Prampir Makara",
    price: "From $49 per night",
    reviews: ["Beautiful Khmer-inspired boutique hotel with a relaxing pool."],
    tags: "prampirmakara"
  },
  {
    name: "Russian Market (Toul Tom Poung Market)",
    category: "Market",
    categoryId: "Visit",
    image: "./images/russian_market.jpg",
    rating: 4.5,
    description: "The bustling heart of the neighborhood, famous for local handicrafts, souvenirs, clothing, and street food stalls.",
    locationtxt: "St 444, Toul Tom Poung",
    location: "https://maps.google.com/?q=Russian+Market+Phnom+Penh",
    area: "TTP",
    price: "Free entry, souvenir and food prices vary.",
    reviews: ["Must-visit market in Phnom Penh."],
    tags: "ttp russian market shopping souvenirs market visit"
  },
  {
    name: "Tuol Sleng Genocide Museum (S-21)",
    category: "Historical Site",
    categoryId: "Visit",
    image: "./images/tuol_sleng.jpg",
    rating: 4.8,
    description: "A former secondary school converted into Security Prison 21 during the Khmer Rouge regime, now a powerful museum and memorial.",
    locationtxt: "St 113, Toul Tom Poung",
    location: "https://maps.google.com/?q=Tuol+Sleng+Genocide+Museum",
    area: "TTP",
    price: "$5 entrance fee ($10 with audio guide).",
    reviews: ["Deeply moving and essential historical experience."],
    tags: "ttp history museum s21 genocide museum visit"
  },
  {
    name: "Wat Toul Tom Poung",
    category: "Temple",
    categoryId: "Visit",
    image: "./images/wat_toul_tom_poung.jpg",
    rating: 4.5,
    description: "A peaceful local Buddhist temple that gives the neighborhood its name, featuring ornate architecture and quiet grounds.",
    locationtxt: "St 444, Toul Tom Poung",
    location: "https://maps.google.com/?q=Wat+Toul+Tom+Poung",
    area: "TTP",
    price: "Free entry.",
    reviews: ["Serene local pagoda in the middle of TTP."],
    tags: "ttp temple pagoda culture visit"
  },
  {
    name: "Street 450 Night Scene & Boutiques",
    category: "Shopping & Nightlife",
    categoryId: "Visit",
    image: "./images/street_450.jpg",
    rating: 4.5,
    description: "A popular pedestrian-friendly strip lined with vibrant craft beer bars, boutique shops, and trendy cafes.",
    locationtxt: "St 450, Toul Tom Poung",
    location: "https://maps.google.com/?q=Street+450+Toul+Tom+Poung",
    area: "TTP",
    price: "Free to explore.",
    reviews: ["Great street for evening strolls and drinks."],
    tags: "ttp street450 shopping nightlife bars visit"
  },
  {
    name: "SLA Art Space",
    category: "Art Gallery",
    categoryId: "Visit",
    image: "./images/sla_art_space.jpg",
    rating: 4.7,
    description: "A contemporary creative center showcasing contemporary Cambodian artists, photography, and cultural exhibitions.",
    locationtxt: "St 450, Toul Tom Poung",
    location: "https://maps.google.com/?q=SLA+Art+Space+Phnom+Penh",
    area: "TTP",
    price: "Free entry for most exhibitions.",
    reviews: ["Wonderful space highlighting modern local talent."],
    tags: "ttp gallery art culture exhibitions visit"
  },
  {
    name: "AEON Mall Mean Chey (AEON 3)",
    category: "Shopping Mall",
    categoryId: "Visit",
    image: "./images/aeon_mean_chey.jpg",
    rating: 4.7,
    description: "The largest retail and entertainment complex in Phnom Penh, featuring extensive shopping, outdoor parks, and indoor entertainment.",
    locationtxt: "Hun Sen Blvd, Meanchey",
    location: "https://maps.google.com/?q=AEON+Mall+Mean+Chey",
    area: "Meanchey",
    price: "Free entry, shopping and dining prices vary.",
    reviews: ["Massive contemporary venue with endless shopping and entertainment."],
    tags: "meanchey aeon mall shopping entertainment visit"
  },
  {
    name: "Chip Mong 271 Mega Mall",
    category: "Shopping Mall",
    categoryId: "Visit",
    image: "./images/chip_mong_271.jpg",
    rating: 4.6,
    description: "A flagship mega mall offering international brands, multi-screen cinemas, hypermarket facilities, and a diverse array of dining options.",
    locationtxt: "Street 271, Meanchey",
    location: "https://maps.google.com/?q=Chip+Mong+271+Mega+Mall",
    area: "Meanchey",
    price: "Free entry.",
    reviews: ["Huge selection of stores, restaurants, and family fun."],
    tags: "meanchey mega mall shopping dining visit"
  },
  {
    name: "Fly Phnom Penh",
    category: "Trampoline Park",
    categoryId: "Visit",
    image: "./images/fly_phnom_penh.jpg",
    rating: 4.6,
    description: "Cambodia's first indoor trampoline park offering dodgeball courts, foam pits, slam dunk zones, and open jumping areas.",
    locationtxt: "Street 271, Meanchey",
    location: "https://maps.google.com/?q=Fly+Phnom+Penh",
    area: "Meanchey",
    price: "$6 – $10 per hour.",
    reviews: ["Super energetic fun for kids and adults alike."],
    tags: "meanchey trampoline fitness sports play visit"
  },
  {
    name: "DIB Club",
    category: "Leisure & Pool Club",
    categoryId: "Visit",
    image: "./images/dib_club.jpg",
    rating: 4.5,
    description: "An open-air relaxation resort hub featuring a large swimming pool, lounge beds, event space, and restaurant options.",
    locationtxt: "Koh Pich (bordering Meanchey)",
    location: "https://maps.google.com/?q=DIB+Club+Phnom+Penh",
    area: "Meanchey",
    price: "Pool day pass fees apply (usually $5–$10 consumable).",
    reviews: ["Great spot to relax by the pool and hang out with friends."],
    tags: "meanchey pool lounge leisure resort visit"
  },
  {
    name: "Phnom Penh Sports Club",
    category: "Sports Complex",
    categoryId: "Visit",
    image: "./images/phnom_penh_sports_club.jpg",
    rating: 4.4,
    description: "A popular sports center equipped with swimming pools, tennis courts, gym facilities, badminton courts, and sauna.",
    locationtxt: "St 271, Meanchey",
    location: "https://maps.google.com/?q=Phnom+Penh+Sports+Club",
    area: "Meanchey",
    price: "Day passes and activity-specific fees apply.",
    reviews: ["Excellent sport facilities for an active afternoon."],
    tags: "meanchey sports fitness swimming gym visit"
  },
  {
    name: "AEON Mall Sen Sok City (AEON 2)",
    category: "Shopping Mall",
    categoryId: "Visit",
    image: "./images/aeon_sen_sok.jpg",
    rating: 4.7,
    description: "A premier destination in Sen Sok featuring extensive shopping, indoor entertainment, a cinema complex, and an indoor water park.",
    locationtxt: "St 1003, Sen Sok",
    location: "https://maps.google.com/?q=AEON+Mall+Sen+Sok+City",
    area: "Sen Sok",
    price: "Free entry, activities and shopping prices vary.",
    reviews: ["One of the most popular shopping and leisure destinations in the area."],
    tags: "sensok aeon mall shopping entertainment visit"
  },
  {
    name: "Cambodian Country Club (CCC)",
    category: "Sports & Leisure Club",
    categoryId: "Visit",
    image: "./images/cambodian_country_club.jpg",
    rating: 4.6,
    description: "A wide-reaching sports resort offering equestrian horseback riding, tennis courts, badminton, archery, and a large outdoor swimming pool.",
    locationtxt: "St 2004, Sen Sok",
    location: "https://maps.google.com/?q=Cambodian+Country+Club",
    area: "Sen Sok",
    price: "Day passes and activity fees apply.",
    reviews: ["Great spot for horseback riding and active outdoor leisure."],
    tags: "sensok ccc sports resort horseback swimming visit"
  },
  {
    name: "Makro Sen Sok",
    category: "Wholesale & Market",
    categoryId: "Visit",
    image: "./images/makro_sen_sok.jpg",
    rating: 4.5,
    description: "A massive warehouse center famous for bulk local and imported food products, fresh produce markets, and international ingredients.",
    locationtxt: "St 1003, Sen Sok",
    location: "https://maps.google.com/?q=Makro+Sen+Sok",
    area: "Sen Sok",
    price: "Free entry.",
    reviews: ["Impressive commercial warehouse center right next to AEON 2."],
    tags: "sensok makro market wholesale shopping visit"
  },
  {
    name: "Global House Sen Sok",
    category: "Home & Lifestyle Center",
    categoryId: "Visit",
    image: "./images/global_house_sensok.jpg",
    rating: 4.4,
    description: "A spacious complex featuring home design showrooms, lifestyle products, and gardening centers.",
    locationtxt: "St 1928, Sen Sok",
    location: "https://maps.google.com/?q=Global+House+Sen+Sok",
    area: "Sen Sok",
    price: "Free entry.",
    reviews: ["Huge home and lifestyle venue in upper Sen Sok."],
    tags: "sensok globalhouse lifestyle shopping visit"
  }
    
]

export {
    LOCATIONS
}