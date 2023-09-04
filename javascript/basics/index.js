console.log('hello world \u{1F601}')

console.log(process.platform);

//using the event emitter to create a custom event
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum yum baby');
})

eventEmitter.emit('lunch');

const { readFile, readFileSync } = require('fs');
