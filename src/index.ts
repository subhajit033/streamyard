import http from 'http'
import express, { Request, Response } from 'express'
import path from 'path'
import { Server as SocketIO } from 'socket.io';

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const server = http.createServer(app);
const io = new SocketIO(server);

io.on('connection', (socket)=>{
    console.log('conntected ', socket.id);
    socket.on('binaryData', (data)=>{
        console.log(data);
    })
})

server.listen(3000, () => {
    console.log(`App running on port 3000`);
})
