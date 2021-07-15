const prompt = require('prompt-sync')();
const { text, options}  = require('./text')
const processOption = require('./controller')


var opt = 0

while (opt != 9) {

    // prompts user about the choices
    console.log(text)

    // gets choice number from the user
    opt = prompt("\n\nEnter the option: ")
    console.log(`You selected ${options[opt-1]}`);

    // performs task according to option choosen by user    
    processOption(opt)

    console.log('\n')

}
