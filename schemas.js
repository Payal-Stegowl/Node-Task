
//Person Object to create Users
function Person(name, email, number, balance) {
    this.name = name
    this.email = email;
    this.number = number;
    this.balance = balance;

    this.base = [],
    this.channels = [],
    this.services = []
};

// BasePacks Object for creating Basic Packs
function BasePacks(name, price, channels) {
    this.name = name;
    this.price = price,
        this.channels = channels
}

// Channels Object for creating all the channels
function Channels(name, price) {
    this.name = name,
        this.price = price
}

// Services Object for creating services
function Services(name, price) {
    this.name = name,
        this.price = price
}

const user = new Person('Payal', 'payalmaheshwari@gmail.com', 987654321, 200)
const gold = new BasePacks('Gold', 100, ['ZEE', 'Sony', 'StarPlus', 'Discovery', 'NetGeo'])
const silver = new BasePacks('Silver', 50, ['ZEE', 'Sony', 'StarPlus'])
const Zee = new Channels('Zee', 10)
const Sony = new Channels('Sony', 15)
const StarPlus = new Channels('Starplus', 20)
const Discovery = new Channels('Discovery', 10)
const NetGeo = new Channels('NetGeo', 20)
const learnEnglish = new Services('LearnEnglish', 200)
const learnCooking = new Services('LearnCooking', 100)

const packs = [gold, silver]
const channels = [Zee, Sony, StarPlus, Discovery, NetGeo]
const services = [learnEnglish, learnCooking]

module.exports = { 'user': user, packs, channels, services }