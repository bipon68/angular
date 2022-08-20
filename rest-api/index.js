//create connection
mongoose = require('mongoose')
// let express = require('express')
// path = require('path')
// conrs = require('cors')
// bodyParser = require('body-parser')
// mongoDb = require('./database/db')

// mongoose.Promise = global.Promise;
// mongoose.connect(mongoDb.bookstore, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('DB connected successfully')
// }, error => {
//     console.log('DB connection error' + error)
// })

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'minimum 3 character'],
        maxlength: [10, 'maximum 10 character']
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        minlength: [3, 'minimum 3 character']
    },
    age: Number,
    bio: String,
    single: Boolean
})

const Person = mongoose.model('Person', personSchema)

// mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
// .then( async() => {
//     console.log('Database connect')
//     const person = new Person({ 
//         firstName: 'Sajib',
//         email: 'sajib@gmail.com'
//     });
//     await person.save();
//     console.log('Person Created')
//     console.log(person)
//     // const people = await Person.find({firstName: 'Bipon'});
//     // console.log(people)
// }).catch(e => {
//     console.log(e)
// })

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then( 
    console.log('Database connect')
).catch(e => {
    console.log(e)
})

// Routes 