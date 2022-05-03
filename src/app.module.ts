import { Module } from "@nestjs/common";
import { AligoBypassHttpModule } from "module/aligo-bypass/bypass-http.module";
import { BiztalkBypassHttpModule } from "module/biztalk-bypass/bypass-http.module";
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
    AligoBypassHttpModule,
    BiztalkBypassHttpModule,
  ],
})
export class AppModule {}
