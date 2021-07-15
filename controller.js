const { user, packs, channels, services } = require('./schemas')
const prompt = require('prompt-sync')();

/**
 * @param {Object} opt
 * @description Takes user choice from 1 to 8 and performs operations
 */

function processOption(opt) {
    if (opt == 1) {
        console.log(`Current balance is ${user.balance} Rs.`)
    }
    else if (opt == 2) {
        let recharge = prompt('Enter the amount to recharge: ')
        user.balance += parseInt(recharge)
        console.log(`Recharge completed successfully. Current balance is ${user.balance}`)
    }
    else if (opt == 3) {
        console.log("Available packs for subscription");
        for (i in packs) {
            console.log(`${packs[i].name}: ${packs[i].channels} ${packs[i].price}`);
        }

        console.log("Available channels for subscription");
        for (i in channels) {
            console.log(`${channels[i].name}: ${channels[i].price}`);
        }
        console.log("Available services for subscription");
        for (i in services) {
            console.log(`${services[i].name}: ${services[i].price}`);
        }
    }
    else if (opt == 4) {
        let pack = prompt('Enter the Pack you wish to subscribe: (Silver: ‘S’, Gold: ‘G’): ')
        let months = prompt('Enter the months:')
        pack = (pack == 'G') ? packs[0] : packs[1]

        let monthlyPrice = pack.price

        months = parseInt(months)
        let totalPrice = (months * monthlyPrice)
        let discount = (months > 3) ? ((pack.price * 10) / 100) * months : 0
        totalPrice = (months > 3) ? totalPrice - discount : totalPrice

        if (user.balance < totalPrice) {
            console.log("You dont have sufficient balance to complete this transaction. Please Recharge");
        }

        else {
            user.balance -= totalPrice
            user.base.push(pack.name)

            console.log(`You have successfully subscribed the following packs - ${pack.name}\nMonthly price: ${monthlyPrice} Rs.`);
            console.log(`No of months: ${months}\nSubscription Amount: ${totalPrice + discount} Rs.`)
            console.log(`Discount applied: ${discount} Rs.\nFinal Price after discount: ${totalPrice} Rs.`)
            console.log(`Account balance: ${user.balance} Rs.\nEmail notification sent successfully\nSMS notification sent successfully`)
        }
    }

    else if (opt == 5) {
        let name = prompt("Enter channel names to add (separated by commas from [Zee, Sony, StarPlus, Discovery, NetGeo]): ")
        let channelsName = name.split(',')
        for (i in channelsName) {
            let name = channelsName[i]
            let price = 0;

            if (name == 'Zee') {
                price = channels[0].price
            }
            else if (name == 'Sony') {
                price = channels[1].price
            }
            else if (name == 'StarPlus') {
                price = channels[2].price
            }
            else if (name == 'Discovery') {
                price = channels[3].price
            }
            else if (name == 'NetGeo') {
                price = channels[4].price
            }
            if (user.balance < price) {
                var message = "You dont have sufficient balance to complete this transaction. Please Recharge"
                break;                
            }
            else{
                user.balance -= price
                user.channels.push(name)
                var message = "Channels added successfully."
            }            
        }
        console.log(message)
        console.log(`Account balance is ${user.balance}`)
    }

    else if( opt == 6){
        let name = prompt("Enter the service name [LearnEnglish, LearnCooking]:")
        let price = 0
        if (name == 'LearnEnglish') {
            price = services[0].price
        }
        else if(name == 'LearnCooking'){
            price = services[1].price
        }
        if (user.balance < price) {
            console.log("You dont have sufficient balance to complete this transaction. Please Recharge")      
        }
        else{
            user.balance -= price
            user.services.push(name)
            console.log(`Service subscribed successfully\nAccount balance: ${user.balance}\nEmail notification sent successfully\nSMS notification sent successfully`)
            console.log(user.services);
        }  

    }

    else if( opt==7){
        console.log(`Currently subscribed packs and channels: ${user.base} ${user.channels}\n`)
        console.log(`Currently subscribed services: ${user.services}`)
    }
    else if(opt == 8){
        const email =  prompt("Enter Email")
        const phone = prompt("Enter Phone")
        user.email = email
        user.number = phone
        console.log("Email and Phone updated successfully");
    }
    else{
        console.log("Enter valid input from 1-9")
    }

}

module.exports = processOption