// npm i -D typescript ts-node
// tsc --init

// npm i express
// npm i -D @types/express

// npm i cors helmet hpp cookie-session compression express-async-errors http-status-codes
// npm i -D @types/cors @types/cookie-session @types/hpp @types/compression @types/node
// npm i -D nodemon
// npm i -D tsconfig-paths

import express, { Express } from "express";
import { ChattyServer } from "./setupServer";

class Application {
  public async initialize(): Promise<void> {
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    await server.start();
  }
}

const application: Application = new Application();
application.initialize().then();
