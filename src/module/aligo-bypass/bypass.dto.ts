import { Method } from "axios";

export interface BypassDTO {
  url: string;
  data: {};
  method?: Method;
}
