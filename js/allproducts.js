const products = [
  {
    id: 1,
    category: ["clothing","fashion"],
    title: "Men's Shirt",
    brand: "Zara",
    price: "$22.00",
    discounted_price: "$18.00",
    tag: ["hot"],
    rating: 4.5,
    details: "This is a men's shirt with a comfortable fit and stylish design.",
    more_details: {
      material: "Cotton",
      color: "Blue",
      warranty: "No Warranty",
      features: ["Breathable fabric", "Slim fit", "Easy wash"],
      usage: "Casual & Formal wear"
    },
    image: "./assest/all products/t shirts.png"
  },

  {
    id: 2,
    category: ["mobiles","electronics"],
    title: "iPhone 15",
    brand: "Apple",
    price: "$998.00",
    discounted_price: "$1128.00",
    tag: ["gift box"],
    rating: 4.5,
    details: "This is an iPhone 15 with premium design and performance.",
    more_details: {
      material: "Glass & Aluminum",
      color: "Black",
      warranty: "1 Year International Warranty",
      features: ["A17 Chip", "Face ID", "5G", "iOS"],
      usage: "Personal & Professional"
    },
    image: "./assest/all products/apple.png"
  },

  {
    id: 3,
    category: ["electronics"],
    title: "Camera",
    brand: "Canon",
    price: "$299.00",
    discounted_price: "$249.00",
    tag: ["hot"],
    rating: 4.5,
    details: "This is a camera with a comfortable fit and stylish design.",
    more_details: {
      material: "Metal & Plastic",
      color: "Black",
      warranty: "1 Year Warranty",
      features: ["HD Recording", "Auto Focus", "Optical Zoom"],
      usage: "Photography & Videography"
    },
    image: "./assest/all products/camera.png"
  },

  {
    id: 4,
    category: ["kitchen","kitchen accessories"],
    title: "Clay Pot",
    brand: "Traditional Crafts",
    price: "$25.00",
    discounted_price: "$20.00",
    tag: ["hot"],
    rating: 4.5,
    details: "This is a clay pot with a comfortable fit and stylish design.",
    more_details: {
      material: "Natural Clay",
      color: "Brown",
      warranty: "No Warranty",
      features: ["Eco-friendly", "Heat resistant"],
      usage: "Cooking & Storage"
    },
    image: "./assest/all products/clay pot.png"
  },

  {
    id: 5,
    category: ["clothes","fashion","clothing"],
    title: "Men's Dress Coat",
    brand: "Hugo Boss",
    price: "$45.00",
    discounted_price: "$35.00",
    tag: [],
    rating: 4.3,
    details: "This is a men's dress coat with a comfortable fit and stylish design.",
    more_details: {
      material: "Wool Blend",
      color: "Black",
      warranty: "No Warranty",
      features: ["Slim fit", "Premium stitching"],
      usage: "Formal events"
    },
    image: "./assest/all products/dress coat.png"
  },

  {
    id: 6,
    category: ["clothes","fashion","clothing"],
    title: "Women's Dress",
    brand: "Gucci",
    price: "$55.00",
    discounted_price: "$45.00",
    tag: [],
    rating: 4.7,
    details: "This is a women's dress with a comfortable fit and stylish design.",
    more_details: {
      material: "Silk",
      color: "Red",
      warranty: "No Warranty",
      features: ["Soft fabric", "Elegant design"],
      usage: "Parties & Events"
    },
    image: "./assest/all products/womendress.jpg"
  },

  {
    id: 7,
    category: ["electronics","mobiles accessories"],
    title: "Bluetooth Headphones",
    brand: "Sony",
    price: "$65.00",
    discounted_price: "$55.00",
    tag: ["hot"],
    rating: 4.0,
    details: "This is a gaming headset with a comfortable fit and stylish design.",
    more_details: {
      material: "Plastic",
      color: "Black",
      warranty: "6 Months Warranty",
      features: ["Noise cancellation", "Long battery life"],
      usage: "Music & Gaming"
    },
    image: "./assest/all products/gaming headset.png"
  },

  {
    id: 8,
    category: ["electronics","mobiles accessories"],
    title: "Gaming Headset",
    brand: "Logitech",
    price: "$85.00",
    discounted_price: "$65.00",
    tag: ["hot"],
    rating: 4.8,
    details: "This is a bluetooth headphones with a comfortable fit and stylish design.",
    more_details: {
      material: "Plastic",
      color: "Black",
      warranty: "1 Year Warranty",
      features: ["Surround sound", "Noise isolation"],
      usage: "Gaming & Streaming"
    },
    image: "./assest/all products/headset.png"
  },

  {
    id: 9,
    category: ["clothes","fashion","clothing"],
    title: "Men's Winter Jacket",
    brand: "North Face",
    price: "$55.00",
    discounted_price: "$45.00",
    tag: [],
    rating: 4.8,
    details: "This is a men's winter jacket with a comfortable fit and stylish design.",
    more_details: {
      material: "Polyester",
      color: "Grey",
      warranty: "No Warranty",
      features: ["Warm lining", "Water resistant"],
      usage: "Winter wear"
    },
    image: "./assest/all products/jacket.png"
  },

  {
    id: 10,
    category: ["clothes","fashion"],
    title: "Jean's Traveling Bag",
    brand: "Levi's",
    price: "$35.00",
    discounted_price: "$25.00",
    tag: ["hot"],
    rating: 4.6,
    details: "This is a jean's traveling bag with a comfortable fit and stylish design.",
    more_details: {
      material: "Denim",
      color: "Blue",
      warranty: "No Warranty",
      features: ["Large capacity", "Strong straps"],
      usage: "Travel & Outdoor"
    },
    image: "./assest/all products/jeans bag.png"
  },

  {
    id: 11,
    category: ["clothes","fashion"],
    title: "Men's Short",
    brand: "Nike",
    price: "$38.00",
    discounted_price: "$28.00",
    tag: ["hot"],
    rating: 4.7,
    details: "This is a men's short with a comfortable fit and stylish design.",
    more_details: {
      material: "Cotton Blend",
      color: "Black",
      warranty: "No Warranty",
      features: ["Stretch fabric", "Lightweight"],
      usage: "Casual & Sports"
    },
    image: "./assest/all products/jeans short.png"
  },

  {
    id: 12,
    category: ["kitchen","kitchen accessories"],
    title: "Electric Kettle",
    brand: "Philips",
    price: "$75.00",
    discounted_price: "$65.00",
    tag: ["hot"],
    rating: 4.9,
    details: "This is a electric kettle with a comfortable fit and stylish design.",
    more_details: {
      material: "Steel & Plastic",
      color: "Silver",
      warranty: "1 Year Warranty",
      features: ["Fast boiling", "Auto shut-off"],
      usage: "Kitchen use"
    },
    image: "./assest/all products/kattel.png"
  },

  {
    id: 13,
    category: ["electronics","mobiles accessories"],
    title: "HP Laptop",
    brand: "HP",
    price: "$1499.00",
    discounted_price: "$1350.00",
    tag: [],
    rating: 4.9,
    details: "This is a hp laptop with a comfortable fit and stylish design.",
    more_details: {
      material: "Metal",
      color: "Silver",
      warranty: "1 Year Warranty",
      features: ["SSD Storage", "High performance"],
      usage: "Office & Professional"
    },
    image: "./assest/all products/laptop.png"
  },

  {
    id: 14,
    category: ["electronics","mobiles accessories","mobile"],
    title: "Oppo A05",
    brand: "Oppo",
    price: "$855.00",
    discounted_price: "$755.00",
    tag: ["hot"],
    rating: 4.5,
    details: "This is a oppoA05 with a comfortable fit and stylish design.",
    more_details: {
      material: "Plastic",
      color: "Green",
      warranty: "1 Year Warranty",
      features: ["Large battery", "Smooth display"],
      usage: "Daily use"
    },
    image: "./assest/all products/phone.png"
  },

  {
    id: 15,
    category: ["electronics","mobiles accessories","mobile"],
    title: "Samsung S25 Ultra",
    brand: "Samsung",
    price: "$2555.00",
    discounted_price: "$2455.00",
    tag: ["hot"],
    rating: 4.7,
    details: "This is a samsung s25 ultra with a comfortable fit and stylish design.",
    more_details: {
      material: "Glass & Metal",
      color: "Black",
      warranty: "1 Year Warranty",
      features: ["AMOLED display", "High-end camera"],
      usage: "Premium use"
    },
    image: "./assest/all products/samsung.png"
  },

  {
    id: 16,
    category: ["electronics","mobiles accessories"],
    title: "Smart Watch",
    brand: "Apple",
    price: "$555.00",
    discounted_price: "$455.00",
    tag: [],
    rating: 4.8,
    details: "This is a smart watch with a comfortable fit and stylish design.",
    more_details: {
      material: "Silicone & Aluminum",
      color: "Black",
      warranty: "1 Year Warranty",
      features: ["Heart rate", "Fitness tracking"],
      usage: "Fitness & Lifestyle"
    },
    image: "./assest/all products/smart watch.png"
  },

  {
    id: 17,
    category: ["fashion","cloths"],
    title: "Wallet for Men's",
    brand: "Leather Craft",
    price: "$255.00",
    discounted_price: "$155.00",
    tag: [],
    rating: 4.4,
    details: "This is a wallet for men's with a comfortable fit and stylish design.",
    more_details: {
      material: "Genuine Leather",
      color: "Brown",
      warranty: "No Warranty",
      features: ["Multiple card slots", "Slim design"],
      usage: "Daily use"
    },
    image: "./assest/all products/wallet.png"
  }
];
