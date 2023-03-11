const express = require('express');
const app = express();
const { PORT } = require('./src/constans/config');
const { pdfGenerator } = require('./src/services/genratePdf')


app.get('/', async (req, res) => {
    try {    
        await pdfGenerator()
        res.send('report send to your registered mail')
    } catch (error) {
        res.send(error.message)
    }
})
app.listen(PORT, (err) => {
    if (err) throw new Error('Error while connecting server');
    console.info(`server running on ${PORT}`)
})