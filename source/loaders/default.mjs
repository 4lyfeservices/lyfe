import express from 'express';
import http from 'node:http';
import { createBareServer } from "bsn";
import path from 'node:path';
import { hostname } from "node:os";
import Unblocker from "fetch-behind";
import chalk from "chalk";

const SystemPort = 2083;
const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
app.use(express.json());
const bareServer = createBareServer('/api5/');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
var unblocker = new Unblocker({prefix: '/webinstance/'});
app.use(unblocker);

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen(SystemPort, () => {
    const address = server.address();
    console.log(chalk.gray.blackBright("[lyfe] ") + "lyfe is now running");
  console.log("\n█░░ █▄█ █▀▀ █▀▀\n█▄▄ ░█░ █▀░ ██▄\n\n\n");
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );
});