import { HttpException } from "@nestjs/common";

export function assertNotNull<T>(
  target: T | undefined,
  name: string
): asserts target is T {
  if (!target) {
    const errors = { [name]: "not found" };
    throw new HttpException({ errors }, 404);
  }
}
