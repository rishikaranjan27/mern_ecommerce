import bcrypt from 'bcryptjs';



const data = {

    users: [
        {
            name: 'Rishika',
            email: 'r@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },

        {
            name: 'Anshu',
            email: 'a@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },


    ],


    products: [
        {
            //_id: '1',
            name: 'REDMI 10',
            slug: 'REDMI-10',
            category: 'Phones',
            image: '/images/p1.jpg', // 679px × 829px
            price: 9200,
            countInStock: 10,
            brand: 'Redmi',
            rating: 4.5,
            numReviews: 10,
            description: 'Caribbean Green, 64 GB, 4 GB RAM',
    
            },
    
            {
                //_id: '2',
                name: 'Dopamine Detox',
                slug: 'Dopamine-Detox-Book',
                category: 'Books',
                image: '/images/p2.jpg',
                price: 250,
                countInStock: 0,
                brand: 'Penguin',
                rating: 4.0,
                numReviews: 10,
                description: 'A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things',
                },
        
                {
                //_id: '3',
                name: 'HOKIPO Runner',
                slug: 'HOKIPO-Runner',
                category: 'Home decor',
                image: '/images/p3.jpg',
                price: 25,
                countInStock: 15,
                brand: 'Nike',
                rating: 4.5,
                numReviews: 14,
                description: 'HOKIPO Runner for Dinner and Coffee Table',
                },
        
                {
                //_id: '4',
                name: 'FISHER-PRICE Soothe',
                slug: 'FISHER-PRICE-Soothe',
                category: 'Toys',
                image: '/images/p4.jpg',
                price: 65,
                countInStock: 5,
                brand: 'FirstCry',
                rating: 4.5,
                numReviews: 10,
                description: 'Kids soft toy',
                },

    ],


};


export default data;