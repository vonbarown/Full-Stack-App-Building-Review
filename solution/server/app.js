const express = require('express');

const app = express();
const port = 3000;


const vegetableRouter = require('./routes/vegetablesRouter')

app.use('/inventory/vegetables', vegetableRouter)


app.get('/inventory', (req, res, next) => {
    res.send('This is /inventory')
})

app.listen(port, () => {
    console.log(`Server Listening at https://localhost:${port}`);
})