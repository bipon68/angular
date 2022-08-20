const express = require('express');
const app = express();
const bookRoute = express.Router();
let Book = require('../model/Book')

// Add book for store
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
// get all book from store
bookRoute.route('/').get((req, res) => {
    Book.find((error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// Get book by ID
bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.data(data)
        }
    })
})

bookRoute.route('/update-book/:id').put((req, res) => {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.data(data)
            console.log("Book updated successfully")
        }
    })
})

bookRoute.route('/delete-book/:id').delete((req, res) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg: data
            })
            //res.data(data)
        }
    })
})

module.exports = bookRoute;