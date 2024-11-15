const app = {
	data() {
        return {
            pictures: ['img/city.jpg', 'img/mummy.jpg', 'img/sphinx.jpg'],
            text: 'Discover the "City of a Thousand Minarets" on a day tour of Cairo with a round-trip bus transfer from Hurghada. Relax in the comfort of air-conditioned comfort on the long journey, admiring views of the Gulf of Suez. Upon arrival, your private Egyptologist guide will take you to the Giza Plateau to see the oldest of the 7 wonders of the ancient world. Get a breathtaking view of the pyramids of Giza as you explore the funerary temples of Cheops, Chephren and Miquerin.',
            price: 120,
            countries: ['Egypt', 'Iceland', 'Japan', 'England']
        }
    },
    methods: {
        showCountry(country) {
            console.log(country)
            if(country == 'Egypt')
            {
                this.pictures[0] = 'img/city.jpg'
                this.pictures[1] = 'img/mummy.jpg'
                this.pictures[2] = 'img/sphinx.jpg'
                this.text = 'Discover the "City of a Thousand Minarets" on a day tour of Cairo with a round-trip bus transfer from Hurghada. Relax in the comfort of air-conditioned comfort on the long journey, admiring views of the Gulf of Suez. Upon arrival, your private Egyptologist guide will take you to the Giza Plateau to see the oldest of the 7 wonders of the ancient world. Get a breathtaking view of the pyramids of Giza as you explore the funerary temples of Cheops, Chephren and Miquerin.'
                this.price = 120
            }
            else if(country == 'Iceland')
            {
                this.pictures[0] = 'img/island.jpg'
                this.pictures[1] = 'img/snow.jpg'
                this.pictures[2] = 'img/iceland.jpg'
                this.text = 'Iceland has many regions with famous tourist attraction. To learn more about the peculiarities of cities in Iceland, you can book a variety of tours from local guides and visit the many attractions of this beautiful country. Reykjavik Domestik Airport is 4 km away. Guests can enjoy themselves by visiting nearby tourist sites and attractions such as Einar Jonsson Museum, Hövdi or Viking Maritime Museum. The range of recreational facilities ensures that guests can have a great time. Guests will be able to leave their car at the hotel using the parking lot.'
                this.price = 300
            }
            else if(country == 'Japan')
            {
                this.pictures[0] = 'img/tokyo.jpg'
                this.pictures[1] = 'img/mountain.jpg'
                this.pictures[2] = 'img/sakura.jpg'
                this.text = 'All rooms at Sapporo Odori Nest Hotel feature a flat-screen TV with satellite channels. Guests can use the refrigerator and electric kettle for refreshments. Each room includes an en suite bathroom with shower. Humidifiers can be borrowed free of charge from the hotel. A dry-cleaning service and 24-hour front desk are offered for guests’ convenience. Fax and photocopying services are available at the front desk. Guests can enjoy a buffet breakfast that includes both Japanese and Western foods. A variety of additional dining options are available within easy walking distance.'
                this.price = 450
            }
            else if(country == 'England')
            {
                this.pictures[0] = 'img/england-nature.jpg'
                this.pictures[1] = 'img/london.jpg'
                this.pictures[2] = 'img/building.jpg'
                this.text = 'Depart Manchester in the morning and head straight for the beautiful Lake District. Stop first in Bowness, located on the shores of Lake Windermere. Take some free time to stroll around the lake, take a scenic cruise, or stroll around town and take in the sublime views. This city boasts majestic medieval architecture and an impressive castle that towers over the surrounding area. From Lancaster, return to Manchester, arriving in the early evening.'
                this.price = 250
            }

        }
    }
}

Vue.createApp(app).mount('#app')

