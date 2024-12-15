const express = require('express');
const config = require('./config/env');
const port = config.port;
const http = require('http');
const user = require('./routes/user.route');
const student = require('./routes/student.route');
const _enum = require('./routes/enum.route');
const cors = require('cors')

//configurations & 3rd partly middleware
const app = express();
const server = http.createServer(app);
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())



//application routes 
app.get('/', (req, res) => {
    res.json("Your Backend Application listening 🎉")
});
app.use('/', [user, student, _enum]);

//Application Listening
server.listen(port, async () => {
    console.log(`Your Backend Application listening on http://localhost:${port} 🎉`);
});