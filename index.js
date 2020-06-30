const express = require('express');
const userRouter = require("./users/user-router");

const server = express();
server.use(express.json());
server.use(userRouter);

server.use('/', (req, res) => res.send('API up and running!'));

server.listen(8000, () => console.log('API running on port 8000'));
