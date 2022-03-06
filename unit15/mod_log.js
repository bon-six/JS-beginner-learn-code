
class Logger {
    
    constructor (id, channel) {
        this.ID = id;
        this.channel = channel;
    }
    
    newlog (message) {
        console.log(`logger ${this.ID} at channel ${this.channel}:`, message);
    }
}

let CHANNEL1 = 1;

let CHANNEL2 = 2;

export {CHANNEL1, CHANNEL2, Logger};