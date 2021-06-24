import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { validate } from "class-validator";

export async function assertFields(target: Object) {
  const errors = await validate(target);
  if (errors.length > 0) {
    throw new HttpException(
      {
        message: "Input data validation failed",
        fields: errors.map((error) => error.property),
      },
      HttpStatus.BAD_REQUEST
    );
  }
}
