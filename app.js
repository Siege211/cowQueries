// setup express routes
// make them use database queries
const express = require('express')
const bodyParser = require('body-parser')
const cowModel = require('./sequelize')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})


app.post('/api/cows', (req,res) =>{
	
	cowModel.create(req.body)
		.then(newCow => res.json(newCow))
})


app.get('/api/cows', (req, res) => {
    
    cowModel.findAll()
    	.then(cows => {
    		console.log(cows);
    		res.json(cows)})
    

})





