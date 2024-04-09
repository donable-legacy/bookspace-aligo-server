// lambda.ts
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { createServer } from "aws-serverless-express";
import { json, urlencoded } from "express";
import { SentryInterceptor } from "shared/sentry.interceptor";
import { AppModule } from "./app.module";

const express = require("express");

const binaryMimeTypes: string[] = [];

async function bootstrapServer() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const nestApp = await NestFactory.create(AppModule, adapter);
  nestApp.useGlobalInterceptors(new SentryInterceptor());
  nestApp.use(json({ limit: "50mb" }));
  nestApp.use(urlencoded({ limit: "50mb", extended: true }));
  await nestApp.init();
  const server = createServer(expressApp, undefined, binaryMimeTypes);
  server.listen(3000);
}

bootstrapServer();
