const express = require("express")
const path = require('path')
const app = express()

var PORT = process.env.port || 3000

// View Engine Setup
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("home");
})

app.post("/script", async (req, res) => {
	var info = {
		username:		req.body.username,
		homedir:		req.body.homedir,
		userid:			req.body.userid,
		groupid:		req.body.groupid,
		description:	req.body.description,
		userexp:		req.body.userexp
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
