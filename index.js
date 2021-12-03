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

app.post("/createUser", function(req, res){
	res.render("createUser");
})

app.post("/modifyUser", function(req, res){
	res.render("modifyUser");
})

app.post("/deleteUser", function(req, res){
	res.render("deleteUser");
})

app.post("/createGroup", function(req, res){
	res.render("createGroup");
})

app.post("/modifyGroup", function(req, res){
	res.render("modifyGroup");
})

app.post("/deleteGroup", function(req, res){
	res.render("deleteGroup");
})

app.post("/createUserScript", async (req, res) => {
	var info = {
		username:		req.body.username,
		homedir:		req.body.homedir,
		userid:			req.body.userid,
		groupid:		req.body.groupid,
		description:	req.body.description,
		userexp:		req.body.userexp
	}
	res.render("createUserScript", 
	{
		info: info
	});
})

app.post("/createGroupScript", async (req, res) => {
	var info = {
		groupname:		req.body.groupname,
		groupid:		req.body.groupid,
		nonuniqueGID:	req.body.nonuniqueGID,
		systemaccount:	req.body.systemaccount,
		successstatus:	req.body.successstatus
	}
	res.render("createGroupScript", 
	{
		info: info
	});
})

app.post("/modifyUserScript", async (req, res) => {
	var info = {
		newDir:			req.body.newDir,
		oldname:		req.body.oldname,
		newname:		req.body.newname,
		groupid:		req.body.groupid,
		userid:			req.body.userid,
		description:	req.body.description,
		userexp:		req.body.userexp
	}
	res.render("modifyUserScript", 
	{
		info: info
	});
})

app.post("/modifyGroupScript", async (req, res) => {
	var info = {
		username:		req.body.username,
		oldname:		req.body.oldname,
		newname:		req.body.newname,
		groupid:		req.body.groupid
	}
	res.render("modifyGroupScript", 
	{
		info: info
	});
})

app.post("/deleteUserScript", async (req, res) => {
	var info = {
		username:		req.body.username,
		removeDir:		req.body.removeDir
	}
	res.render("deleteUserScript", 
	{
		info: info
	});
})

app.post("/deleteGroupScript", async (req, res) => {
	var info = {
		groupname:		req.body.groupname
	}
	res.render("deleteGroupScript", 
	{
		info: info
	});
})

app.listen(PORT, function(error){
	if(error) throw error
	console.log("Hosting on port", PORT)
})
