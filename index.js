const express = require("express");
const app = express();
const path = require('path');
const cors_proxy = require('cors-anywhere');

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/static/pages/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8000, () => {
 console.log("Server running on port 8000");
});

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    // removeHeaders: ['cookie', 'cookie2']
}).listen(3000, 'localhost', function() {
    console.log('Running CORS Anywhere on ' + 'localhost' + ':' + 3000);
});