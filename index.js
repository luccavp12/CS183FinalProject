const express = require("express")
const path = require('path')
const app = express()

var PORT = process.env.port || 3000

// View Engine Setup
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded());

app.get("/", function(req, res){
	res.render("AdminForm");
})

app.post("/script", async (req, res) => {
	var info = {
		email:  req.body.email
	}
	res.render("script", 
	{
		info: info
	});
})

app.listen(PORT, function(error){
	if(error) throw error
	console.log("Hosting on port", PORT)
})
