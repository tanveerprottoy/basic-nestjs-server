import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Constants } from "./utils/constants";

@Controller({
    path: "/",
    version: Constants.API_VERSION_1
})
export class AppController {

    constructor(private readonly appService: AppService) { }

    @Get()
    get() {
        return this.appService.get();
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    post() {
        return this.appService.post();
    }
}
