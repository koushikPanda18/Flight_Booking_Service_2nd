import dotenv from 'dotenv';
dotenv.config();
export const ServerConfig= {
    PORT: process.env.PORT,
    ConnectUri: process.env.CONNECT_URI
}