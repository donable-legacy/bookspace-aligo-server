import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("home")
  async main() {
    return "Aligo Bypass";
  }
}
