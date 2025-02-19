import { RpgServerEngineHooks, RpgServerEngine } from '@rpgjs/server';
import jwt from 'jsonwebtoken';


const server: RpgServerEngineHooks = {
    // auth(server: RpgServerEngine, socket) {
    //     const token = socket.handshake.headers.authorization;
    //     if (!token) {
    //         throw 'No token provided';
    //     }

    //     // Replace 'YOUR_SECRET_KEY' with your actual secret key used to sign the JWT
    //     const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    //     if (!decoded) {
    //         throw 'Invalid token';
    //     }

    //     // Assuming 'decoded' contains a property 'id' representing the user ID
    //     return decoded.id;
    // }
};

export default server;