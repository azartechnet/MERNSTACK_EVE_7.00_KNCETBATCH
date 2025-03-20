//Importing event
const EventEmitter=require('events')
const eventEmitter=new EventEmitter()
//Creating event
eventEmitter.on('myEvent',function(){
    console.log('Event triggered')
    })
    //Triggering event
    eventEmitter.emit('myEvent')
    
