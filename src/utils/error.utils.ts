import { HttpException, HttpStatus } from "@nestjs/common";
import { Constants } from "./constants";

export class ErrorUtils {

    static throwHttpError(
        response: any = Constants.GENERIC_ERROR,
        status: number = HttpStatus.INTERNAL_SERVER_ERROR,
    ): HttpException {
        throw new HttpException(
            response,
            status
        );
    }
}