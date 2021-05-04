const express = require('express');
const { getgid } = require('node:process');
const app = express()
const port = 3000
const file = require('./project/posts.json')

app.use(express.urlencoded({ extended: true }));

app.post('/posts', (req, res) => {
 let result = req.body;
 let data = file.push(result)
 res.send(result)

})

app.get('/posts', (req, res) => {
  res.send(file)
})

app.get('/posts/:id', (req, res) => {
  let getById = req.params.id;
  let dbFilter = file.filter( ele => {
    return ele.id == getById;
  })
  res.send(dbFilter)

})

app.put('/posts/:id', (req, res) => { 
 let getId = parseInt(req.params.id)-1
 let newData = req.body;

 file[getId] = {
   ... newData, id: getId + 1
 }
 res.send(file[getId])

})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})