const Greeting = require('../Base');

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textMessage = 'Leaving {server}';
        this.textTitle = 'GOODBYE';
        this.colorTitle = '#df0909';
    }
};
