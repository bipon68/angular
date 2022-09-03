const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})
// /api/courses/1
app.get('/api/courses/:id', (req, res)=> {
    res.send(req.params.id)
})
//http://localhost:3000/api/courses/2018/1
app.get('/api/courses/:year/:month', (req, res)=> {
    res.send(req.params)
})
// Query params:  http://localhost:3000/api/courses/2018/1?sortBy=name
app.get('/api/posts/:year/:month', (req, res)=> {
    res.send(req.query)
})
// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))