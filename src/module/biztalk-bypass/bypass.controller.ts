import { Body, Controller, HttpException, Post } from "@nestjs/common";
import { assertAxiosError } from "util/assertAxiosError";
import { biztalkRequester } from "util/requester";
import { BiztalkBypassDTO } from "./bypass.dto";

@Controller("biztalk/bypass")
export class BypassController {
  @Post()
  async bypass(@Body() payload: BiztalkBypassDTO) {
    try {
      const res = await biztalkRequester.request({
        url: payload.url,
        data: payload.data,
        method: payload.method ?? "POST",
        headers: payload.headers,
      });
      return res.data;
    } catch (e) {
      assertAxiosError(e);
      throw new HttpException(e.response.data, e.response.status);
    }
  }
}
