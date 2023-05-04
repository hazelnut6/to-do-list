
const express = require("express");
const app = express();


let items = ["A Study in Scarlet", "Murder on the Orient Express", "The Metamorphosis", "The Moonstone"];

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    let today = new Date();
    let myDate ={
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-US", myDate);
    res.render("list",{myDay: day, addedItem: items} );
});

app.post('/', function(req, res) {
    var activity = req.body.insertAct;

    items.push(activity);
    res.redirect("/");
});

app.get("/about", function(req, res) {
    res.render("about")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
