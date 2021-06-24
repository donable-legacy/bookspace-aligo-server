import type { AxiosError } from "axios";

export function assertAxiosError(e: Error): asserts e is AxiosError {
  if ("isAxiosError" in e) {
    return;
  }
  throw e;
}
