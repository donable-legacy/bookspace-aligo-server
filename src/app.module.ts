import { Module } from "@nestjs/common";
import { BypassHttpModule } from "module/bypass/bypass-http.module";
import { ConfigModule } from "nestjs-config";
import * as path from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.load(
      path.resolve(__dirname, "config", "**", "!(*.d).{ts,js}")
    ),
    BypassHttpModule,
  ],
})
export class AppModule {}
