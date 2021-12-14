interface Product {
    id: number;
    title: string;
    price: string;
    image: string
    description: string;
    helper: string;
    rating: string;
}


let PRODUCTS: Product[] = [
    {
        "id": 1,
        "title": "Cute Cat",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "4.87"
    },
    {
        "id": 2,
        "title": "Vintage Typewriter",
        "price": "49.50",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img12.jpg",
        "description": "Vintage Typewriter to post awesome stories about UI design and web development.",
        "helper": "Eligible for Shipping To Mars or somewhere else",
        "rating": "4.05"
    },
    {
        "id": 3,
        "title": "Lee Pucker",
        "price": "13.95",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img11.jpg",
        "description": "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
        "helper": "1258 bids, 359 watchers $5.95 for shipping",
        "rating": "4.56"
    },
    {
        "id": 4,
        "title": "Plastic useless plugs",
        "price": "12.48",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img9.jpg",
        "description": "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
        "helper": "Wordwide shitting available Buyers protection possible!",
        "rating": "4.77"
    },
    {
        "id": 5,
        "title": "Creativity stimulating lotion",
        "price": "12.48",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img8.jpg",
        "description": "Creativity stimulating lotion. Drink every morning to generate better ideas!",
        "helper": "Wordwide shifting available Buyers protection possible!",
        "rating": "4.99"
    },
    {
        "id": 6,
        "title": "Prototyping",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img7.jpg",
        "description": "Prototyping items to create a lot if useless things...",
        "helper": "Showcasing onHovered state",
        "rating": "4.56"
    },
    {
        "id": 7,
        "title": "Envelope, Stripes",
        "price": "9.50",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img5.jpg",
        "description": "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel yourself OKAY",
        "helper": "Eligible for Shipping To Mars or somewhere else",
        "rating": "4.87"
    },
    {
        "id": 8,
        "title": "Bonsai",
        "price": "11.68",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img3.jpg",
        "description": "One string Bonsai description",
        "helper": "Wordwide shifting available Buyers protection possible!",
        "rating": "4.77"
    },
    {
        "id": 9,
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img6.jpg",
        "title": "John Von Ebalkin",
        "price": "13.95",
        "description": "John Von Ebalkin SPRING 1954 collection. Nice and slim fit trouses.",
        "helper": "1258 bids, 359 watchers $5.95 for shipping",
        "rating": "4.56"
    },
    {
        "id": 10,
        "title": "Cute Cat Test 1",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "0.03"
    },
    {
        "id": 11,
        "title": "Cute Cat Test 2",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "0.51"
    },
    {
        "id": 12,
        "title": "Cute Cat Test 3",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "5.00"
    },
    {
        "id": 13,
        "title": "Cute Cat Test 4",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "3.21"
    },
    {
        "id": 14,
        "title": "Cute Cat Test 5",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "1.33"
    },
    {
        "id": 15,
        "title": "Cute Cat Test 6",
        "price": "128.99",
        "image": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "description": "Timesaving kitten to save months on development. Playful, cute, cheap!",
        "helper": "Eligible for nothing :(",
        "rating": "2.56"
    }
];

function listAll() {
    return PRODUCTS;
}
export { listAll };

export type { Product };