const express = require('express');

const server = express();

server.use(express.json());

const port = 4223;
server.listen(port, () => console.log(`Server running on ${port}`));