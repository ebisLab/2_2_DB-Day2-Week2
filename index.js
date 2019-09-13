const express = require('express');
const carsRouter = require('./cars/cars-router.js')

const server = express();

server.use(express.json());

server.use('/cars', carsRouter);

const port = 4223;
server.listen(port, () => console.log(`Server running on ${port}`));