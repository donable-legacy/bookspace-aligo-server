import { Method } from "axios";

export interface BiztalkBypassDTO {
  url: string;
  data: object;
  method?: Method;
  headers?: object;
}
