const Joi = require('joi')
const express = require('express');
const app = express();
app.use(express.json())

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
app.get('/api/courses', (req, res) => {
    res.send(courses)
})
// /api/courses/1
app.get('/api/courses/:id', (req, res)=> {
    // res.send(req.params.id)
   const course = courses.find(c => c.id === parseInt(req.params.id))
   if(!course){
       res.status(404).send('The course with the given ID was not found')
   }
   res.send(course)

})
//http://localhost:3000/api/courses/2018/1
app.get('/api/courses/:year/:month', (req, res)=> {
    res.send(req.params)
})
// Query params:  http://localhost:3000/api/courses/2018/1?sortBy=name
app.get('/api/posts/:year/:month', (req, res)=> {
    res.send(req.query)
})

app.post('/api/courses', (req, res) => {
    // const schema = {
    //     name: Joi.string().min(3).required()
    // }
    // const result = Joi.validate(req.body, schema);
    // console.log(result);

    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is required and should be minimum 3 character.');
        return;
    }   
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})


app.put('/api/courses/:id', (req, res)=> {
    // look up the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('The course with the given ID was not found')
    }
    // validate the coruse
    // if invalid, return 400 - Bad request
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is required and should be minimum 3 character.');
        return;
    } 

    // update course
    // return the update course
   course.name = req.body.name;  
   res.send(course)
})

app.delete('/api/courses/:id', (req, res)=> {
    // look up the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('The course with the given ID was not found')
    }

    // delete course
    const index = courses.indexOf(course)
    console.log(index)
    courses.splice(index, 1)
    // if not delete otherse return the same course
   res.send(course)
})


// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))