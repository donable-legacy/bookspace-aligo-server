import { Body, Controller, HttpException, Post } from "@nestjs/common";
import * as qs from "qs";
import { assertAxiosError } from "util/assertAxiosError";
import { aligoRequester } from "util/requester";
import { BypassDTO } from "./bypass.dto";

@Controller("aligo/bypass")
export class BypassController {
  constructor() {}

  @Post()
  async c(@Body() payload: BypassDTO) {
    try {
      const res = await aligoRequester.request({
        url: payload.url,
        data: qs.stringify(payload.data),
        method: payload.method ?? "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
      });
      return res.data;
    } catch (e) {
      assertAxiosError(e);
      throw new HttpException(e.response.data, e.response.status);
    }
  }
}
