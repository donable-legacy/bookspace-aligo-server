import { Body, Controller, Options, Post } from "@nestjs/common";
import axios, { Method } from "axios";

@Controller("bypass")
export class BypassController {
  constructor() {}

  @Options()
  async options() {
    return "ok";
  }

  @Post()
  async bypass(@Body() data: BypassPayload) {
    const { url, method, query, body, headers } = data;
    const request = await axios.request({
      url,
      method,
      params: query,
      data: body,
      headers,
    });
    return request.data;
  }
}

export interface BypassPayload {
  url: string;
  method: Method;
  query: Record<string, string>;
  body: unknown;
  headers: Record<string, string>;
}
