var express = require('express');
var app = express();

app.use("/pagemockups/assets/bootstrap/css", express.static(__dirname + '/pagemockups/assets/bootstrap/css'));
app.use("/pagemockups/assets/theme/css", express.static(__dirname + '/pagemockups/assets/theme/css'));
app.use("/pagemockups/assets/js", express.static(__dirname + '/pagemockups/assets/js'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagemockups/index.html');
});

app.listen(3000);