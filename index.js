const express = require('express')
const app = express()
const port = 3000


//Custom routes

app.get('/api/posts', (req, res) => {    
    res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/posts/:id/comments', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/tags/:name', (req, res) => {
    res.send('Hello World!')
});
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})