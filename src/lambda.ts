// lambda.ts
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import * as Sentry from "@sentry/node";
import { Context, Handler } from "aws-lambda";
import { createServer, proxy } from "aws-serverless-express";
import { eventContext } from "aws-serverless-express/middleware";
import { json, urlencoded } from "express";
import { Server } from "http";
import { SentryInterceptor } from "shared/sentry.interceptor";
import { AppModule } from "./app.module";

const express = require("express");

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    Sentry.init({
      dsn:
        "https://18019dd505274ee2ba63b19531820ba8@o574309.ingest.sentry.io/5725280",
    });
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const nestApp = await NestFactory.create(AppModule, adapter);
    nestApp.useGlobalInterceptors(new SentryInterceptor());
    nestApp.use(eventContext());
    nestApp.use(json({ limit: "50mb" }));
    nestApp.use(urlencoded({ limit: "50mb", extended: true }));
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, "PROMISE").promise;
};
