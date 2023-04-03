const express = require('express')
const app = express()

const fs = require('fs')

app.set('view engine', 'pug')

app.use('/static', express.static('public'))
app.use(express.urlencoded({extended: false}))

// localhost:8000
app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    console.log('title', title)

   
})


const notes = ['Some title', 'Some title 2']

app.get('/notes', (req, res) => {
    res.render('notes',{notes: notes})
})

app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    res.render('detail')
})


app.listen(8000, err =>{
    if (err) console.log(err)
    console.log ('Server is running on port 8000...')
})