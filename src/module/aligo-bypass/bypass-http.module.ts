import { Module, NestModule } from "@nestjs/common";
import { BypassController } from "./bypass.controller";
import { BypassService } from "./bypass.service";

@Module({
  imports: [],
  providers: [BypassService],
  controllers: [BypassController],
  exports: [],
})
export class AligoBypassHttpModule implements NestModule {
  public configure() {}
}
