const app = require('express')();
const port = process.env.PORT || 8080;

app.get('/update', require('./actions/update'));
app.get('/get', require('./actions/get'));
app.get('/poll', require('./actions/poll'));

app.listen(port, () => console.log(`Listening on port ${port}`));