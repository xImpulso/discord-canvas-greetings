const Greeting = require('../Base');

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textMessage = 'Welcome to {server}';
        this.textTitle = 'WELCOME';
        this.colorTitle = '#03A9F4';
    }
};
